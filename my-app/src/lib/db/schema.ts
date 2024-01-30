import { integer, pgEnum, pgTable, serial, text, timestamp, varchar} from 'drizzle-orm/pg-core';

// Define the 'user_system_enum' enum
export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"]);

export const chats = pgTable("chats", {
    id: serial("id").primaryKey(), // Define the 'id' column as a primary key
    pdfName: text("pdf_name").notNull(), // Define the 'pdfName' column as a non-null text
    pdfUrl: text("pdf_url").notNull(), // Define the 'pdfUrl' column as a non-null text
    createdAt: timestamp("created_at").notNull().defaultNow(), // Define the 'createdAt' column as a non-null timestamp with a default value of the current timestamp
    userId: varchar("user_id", { length: 256}).notNull(), // Define the 'userId' column as a non-null varchar with a length of 256
    fileKey: text("file_key").notNull(), // Define the 'fileKey' column as a non-null text
});

export const messages = pgTable("messages", {
    id: serial("id").primaryKey(), // Define the 'id' column as a primary key
    chatId: integer('chat_id').references(()=>chats.id).notNull(), // Define the 'chatId' column as a non-null integer that references the 'id' column of the 'chats' table
    content: text('content').notNull(), // Define the 'content' column as a non-null text
    createdAt: timestamp("created_at").notNull().defaultNow(), // Define the 'createdAt' column as a non-null timestamp with a default value of the current timestamp
    role: userSystemEnum("role").notNull(), // Define the 'role' column as a non-null enum of type 'user_system_enum'
});

//drizzle-orm
//drizzle - kit