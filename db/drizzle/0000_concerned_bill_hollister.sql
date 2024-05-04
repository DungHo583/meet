CREATE TABLE IF NOT EXISTS `configs` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`allow_join` boolean,
	CONSTRAINT `configs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `peers` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(200),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `peers_id` PRIMARY KEY(`id`),
	CONSTRAINT `peers_name_unique` UNIQUE(`name`)
);
