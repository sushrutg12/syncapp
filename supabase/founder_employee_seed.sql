-- Sample data for founder-employee matching app
-- This data can be loaded after the migration is applied

-- Add sample SWE and Creative profiles
UPDATE "public"."profiles"
SET 
  "one_line_description" = 'Fullstack developer specialized in React and Node.js',
  "user_role" = 'swe'
WHERE "id" = '00000000-0000-0000-0000-000000000000';

UPDATE "public"."profiles"
SET 
  "one_line_description" = 'UX/UI designer with 5 years of experience in fintech',
  "user_role" = 'creative'
WHERE "id" = '00000000-0000-0000-0000-000000000001';

UPDATE "public"."profiles"
SET 
  "one_line_description" = 'Founder of a sustainability startup looking for tech talent',
  "user_role" = 'founder'
WHERE "id" = '00000000-0000-0000-0000-000000000002';

-- Add skills for a SWE profile
INSERT INTO "public"."profile_skills" ("profile_id", "skill_id")
SELECT '00000000-0000-0000-0000-000000000000', id FROM "public"."skills" WHERE name IN (
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Supabase'
);

-- Add skills for a Creative profile
INSERT INTO "public"."profile_skills" ("profile_id", "skill_id")
SELECT '00000000-0000-0000-0000-000000000001', id FROM "public"."skills" WHERE name IN (
  'Figma', 'UI Design', 'UX Design', 'Photoshop', 'Illustrator'
);

-- Add work experience for SWE
INSERT INTO "public"."work_experiences" 
  ("profile_id", "company_name", "role", "start_date", "end_date", "is_current", "industry")
VALUES
  ('00000000-0000-0000-0000-000000000000', 'Google', 'Software Engineer', '2019-01-01', '2021-06-30', false, 'Technology'),
  ('00000000-0000-0000-0000-000000000000', 'Stripe', 'Senior Frontend Developer', '2021-07-01', NULL, true, 'Fintech');

-- Add work experience for Creative
INSERT INTO "public"."work_experiences" 
  ("profile_id", "company_name", "role", "start_date", "end_date", "is_current", "industry", "campaign_name")
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Airbnb', 'UX Designer', '2018-03-15', '2020-12-31', false, 'Travel', 'Airbnb Plus Launch'),
  ('00000000-0000-0000-0000-000000000001', 'Freelance', 'UI/UX Consultant', '2021-01-01', NULL, true, 'Various', 'Multiple client campaigns');

-- Add projects for SWE
INSERT INTO "public"."projects" 
  ("profile_id", "title", "description", "project_order")
VALUES
  ('00000000-0000-0000-0000-000000000000', 'E-commerce Platform', 'Built a full-stack e-commerce platform using React, Node.js, and PostgreSQL. Implemented user authentication, product catalog, cart functionality, and payment processing.', 0),
  ('00000000-0000-0000-0000-000000000000', 'Real-time Chat Application', 'Developed a real-time chat application using WebSockets and React. Features include group chats, direct messages, and message history.', 1),
  ('00000000-0000-0000-0000-000000000000', 'Task Management System', 'Created a task management system with drag-and-drop functionality using React DnD. Includes boards, lists, cards, and user collaboration features.', 2);

-- Add projects for Creative
INSERT INTO "public"."projects" 
  ("profile_id", "title", "description", "project_order")
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Banking App Redesign', 'Redesigned a mobile banking app to improve user experience and increase engagement. Conducted user research, created wireframes, and delivered final UI designs.', 0),
  ('00000000-0000-0000-0000-000000000001', 'E-learning Platform', 'Designed an e-learning platform focused on accessibility and user engagement. Created a design system and component library for the platform.', 1),
  ('00000000-0000-0000-0000-000000000001', 'Startup Branding', 'Developed brand identity and design guidelines for a tech startup. Created logo, color palette, typography, and marketing materials.', 2);

-- Add project media for SWE projects
INSERT INTO "public"."project_media" 
  ("project_id", "media_type", "url", "media_order")
VALUES
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'E-commerce Platform'), 'image', 'https://example.com/projects/ecommerce-platform.jpg', 0),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'E-commerce Platform'), 'github_link', 'https://github.com/username/ecommerce-platform', 1),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'E-commerce Platform'), 'demo_link', 'https://ecommerce-platform-demo.example.com', 2),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'Real-time Chat Application'), 'image', 'https://example.com/projects/chat-app.jpg', 0),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'Real-time Chat Application'), 'github_link', 'https://github.com/username/chat-app', 1),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'Task Management System'), 'image', 'https://example.com/projects/task-management.jpg', 0),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000000' AND title = 'Task Management System'), 'video', 'https://example.com/projects/task-management-demo.mp4', 1);

-- Add project media for Creative projects
INSERT INTO "public"."project_media" 
  ("project_id", "media_type", "url", "media_order")
VALUES
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'Banking App Redesign'), 'image', 'https://example.com/projects/banking-app-1.jpg', 0),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'Banking App Redesign'), 'image', 'https://example.com/projects/banking-app-2.jpg', 1),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'Banking App Redesign'), 'figma_link', 'https://figma.com/file/banking-app-redesign', 2),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'E-learning Platform'), 'image', 'https://example.com/projects/elearning-1.jpg', 0),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'E-learning Platform'), 'image', 'https://example.com/projects/elearning-2.jpg', 1),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'E-learning Platform'), 'video', 'https://example.com/projects/elearning-walkthrough.mp4', 2),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'Startup Branding'), 'image', 'https://example.com/projects/branding-logo.jpg', 0),
  ((SELECT id FROM "public"."projects" WHERE profile_id = '00000000-0000-0000-0000-000000000001' AND title = 'Startup Branding'), 'image', 'https://example.com/projects/branding-styleguide.jpg', 1); 