insert into "public"."children" ("id", "name") values
	(1, 'Don''t have children'),
	(2, 'Have children');

insert into "public"."covid_vaccine" ("id", "name") values
	(1, 'Vaccinated'),
	(2, 'Partially vaccinated'),
	(3, 'Not yet vaccinated');

insert into "public"."ethnicities" ("id", "name") values
	(1, 'Black/African Descent'),
	(2, 'East Asian'),
	(3, 'Hispanic/Latino'),
	(4, 'Middle Eastern'),
	(5, 'Native American'),
	(6, 'Pacific Islander'),
	(7, 'South Asian'),
	(8, 'Southeast Asian'),
	(9, 'White/Caucasian'),
	(10, 'Other');

insert into "public"."family_plans" ("id", "name") values
	(1, 'Don''t want children'),
	(2, 'Want children'),
	(3, 'Open to children'),
	(4, 'Not sure');

insert into "public"."genders" ("id", "name", "plural_name") values
	(1, 'Man', 'Men'),
	(2, 'Woman', 'Women'),
	(3, 'Nonbinary', 'Nonbinary people');

insert into "public"."pets" ("id", "name") values
	(1, 'Dog'),
	(2, 'Cat'),
	(3, 'Bird'),
	(4, 'Fish'),
	(5, 'Reptile');

insert into "public"."prompts" ("id", "question") values
	(1, 'The way to win me over is'),
	(2, 'I go crazy for'),
	(3, 'My greatest strength'),
	(4, 'I recently discovered that'),
	(5, 'A random fact I love is'),
	(6, 'Unusual skills'),
	(7, 'Dating me is like'),
	(8, 'I''m convinced that'),
	(9, 'A life goal of mine'),
	(10, 'Typical Sunday'),
	(11, 'This year, I really want to'),
	(12, 'My most irrational fear'),
	(13, 'My simple pleasures'),
	(14, 'Green flags I look for'),
	(15, 'The hallmark of a good relationship is'),
	(16, 'We''ll get along if'),
	(17, 'We''re the same type of weird if'),
	(18, 'All I ask is that you'),
	(19, 'I''ll fall for you if'),
	(20, 'I''ll brag about you to my friends if'),
	(21, 'I''m weirdly attracted to'),
	(22, 'I want someone who'),
	(23, 'Something that''s non-negotiable for me is'),
	(24, 'I''m looking for'),
	(25, 'I get myself out of a funk by'),
	(26, 'I hype myself up by'),
	(27, 'I wind down by'),
	(28, 'When I need advice, I go to'),
	(29, 'A boundary of mine is'),
	(30, 'To me, relaxation is'),
	(31, 'The last time I cried happy tears was'),
	(32, 'My last journal entry was about'),
	(33, 'My friends ask me for advice about'),
	(34, 'My therapist would say I'),
	(35, 'My self-care routine is'),
	(36, 'Therapy recently taught me'),
	(37, 'My cry-in-the-car song is'),
	(38, 'I feel most supported when'),
	(39, 'I know the best spot in town for'),
	(40, 'The best way to ask me out is by'),
	(41, 'Together, we could'),
	(42, 'What I order for the table'),
	(43, 'First round is on me if'),
	(44, 'Biggest risk I''ve taken'),
	(45, 'Most spontaneous thing I''ve done'),
	(46, 'My biggest date fail'),
	(47, 'Weirdest gift I have given or received'),
	(48, 'Two truths and a lie'),
	(49, 'Never have I ever'),
	(50, 'Best travel story'),
	(51, 'Worst idea I''ve ever had'),
	(52, 'One thing I''ll never do again'),
	(53, 'The dorkiest thing about me is'),
	(54, 'My most controversial opinion is'),
	(55, 'If loving this is wrong, I don''t want to be right'),
	(56, 'What if I told you that'),
	(57, 'You should *not* go out with me if'),
	(58, 'The key to my heart is'),
	(59, 'I won''t shut up about'),
	(60, 'My Love Language is'),
	(61, 'I geek out on'),
	(62, 'The one thing you should know about me is'),
	(63, 'Don''t hate me if I'),
	(64, 'Change my mind about'),
	(65, 'Do you agree or disagree that'),
	(66, 'The one thing I''d love to know about you is'),
	(67, 'Give me travel tips for'),
	(68, 'You should leave a comment if'),
	(69, 'I bet you can''t'),
	(70, 'I''ll pick the topic if you start the conversation'),
	(71, 'Let''s debate this topic'),
	(72, 'Try to guess this about me'),
	(73, 'Teach me something about'),
	(74, 'Let''s make sure we''re on the same page about'),
	(75, 'My BFF''s take on why you should date me'),
	(76, 'A quick rant about'),
	(77, 'I''ll give you the set up, you guess the punchline'),
	(78, 'Guess the song'),
	(79, 'Proof I have musical talent'),
	(80, 'My best Dad Joke'),
	(81, 'Saying "Hi!" in as many languages I know'),
	(82, 'My best celebrity impression'),
	(83, 'Apparently, my life''s soundtrack is'),
	(84, 'I wish more people knew'),
	(85, 'How to pronounce my name'),
	(86, 'A shower thought I recently had'),
	(87, 'My favorite line from a movie');

insert into "public"."pronouns" ("id", "name") values
	(1, 'she'),
	(2, 'her'),
	(3, 'hers'),
	(4, 'he'),
	(5, 'him'),
	(6, 'his'),
	(7, 'they'),
	(8, 'them'),
	(9, 'theirs'),
	(10, 've'),
	(11, 'ver'),
	(12, 'vis'),
	(13, 'ze'),
	(14, 'hir'),
	(15, 'hirs'),
	(16, 'ae'),
	(17, 'aer'),
	(18, 'aers'),
	(19, 'ey'),
	(20, 'em'),
	(21, 'eirs'),
	(22, 'fae'),
	(23, 'faer'),
	(24, 'faers'),
	(25, 'xe'),
	(26, 'xem'),
	(27, 'xyrs'),
	(28, 'zir'),
	(29, 'zirs');

insert into "public"."sexualities" ("id", "name") values
	(1, 'Straight'),
	(2, 'Gay'),
	(3, 'Lesbian'),
	(4, 'Bisexual'),
	(5, 'Allosexual'),
	(6, 'Androsexual'),
	(7, 'Asexual'),
	(8, 'Autosexual'),
	(9, 'Bicurious'),
	(10, 'Demisexual'),
	(11, 'Fliud'),
	(12, 'Graysexual'),
	(13, 'Gynosexual'),
	(14, 'Monosexual'),
	(15, 'Omnisexual'),
	(16, 'Pansexual'),
	(17, 'Polysexual'),
	(18, 'Queer'),
	(19, 'Questioning'),
	(20, 'Skoliosexual'),
	(21, 'Spectrasexual');

insert into "public"."zodiac_signs" ("id", "name") values
	(1, 'Aries'),
	(2, 'Taurus'),
	(3, 'Gemini'),
	(4, 'Cancer'),
	(5, 'Leo'),
	(6, 'Virgo'),
	(7, 'Libra'),
	(8, 'Scorpio'),
	(9, 'Sagittarius'),
	(10, 'Capricorn'),
	(11, 'Aquarius'),
	(12, 'Pisces');

insert into "public"."profiles" ("id", "first_name", "last_name", "dob", "height_cm", "neighborhood", "latitude", "longitude", "children_id", "covid_vaccine_id", "family_plan_id", "gender_id", "zodiac_sign_id", "sexuality_id", "max_distance_km", "min_age", "max_age", "phone") values
	('00000000-0000-0000-0000-000000000000', 'Javel', NULL, '1995-12-25', 180, 'Montego Bay', 18.499634842789888, -77.91729233644581, 1, 1, 2, 1, 9, 1, 160, 18, 100, '18761234567'),
	('00000000-0000-0000-0000-000000000001', 'David', NULL, '2001-11-02', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 1, 1, 8, 1, 160, 18, 100, '10000000001'),
	('00000000-0000-0000-0000-000000000002', 'Jess', NULL, '1986-03-06', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 3, 2, 12, 1, 160, 18, 100, '10000000002'),
	('00000000-0000-0000-0000-000000000003', 'Randen', NULL, '1982-09-23', 180, 'Kingston', 17.9374623588942, -76.779836513002, 2, 1, 2, 1, 7, 1, 160, 18, 100, '10000000003'),
	('00000000-0000-0000-0000-000000000004', 'Bhanu', NULL, '1982-11-14', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 4, 1, 8, 18, 160, 18, 100, '10000000004'),
	('00000000-0000-0000-0000-000000000005', 'Jem', NULL, '1991-12-04', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 2, 2, 9, 1, 160, 18, 100, '10000000005'),
	('00000000-0000-0000-0000-000000000006', 'Moriah', NULL, '1995-03-14', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 4, 2, 12, 1, 160, 18, 100, '10000000006'),
	('00000000-0000-0000-0000-000000000007', 'Tim', NULL, '1992-07-27', 180, 'Kingston', 17.9374623588942, -76.779836513002, 2, 1, 2, 1, 5, 1, 160, 18, 100, '10000000007'),
	('00000000-0000-0000-0000-000000000008', 'Soda', NULL, '1996-04-04', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 4, 2, 1, 1, 160, 18, 100, '10000000008'),
	('00000000-0000-0000-0000-000000000009', 'Tevin', NULL, '1999-04-24', 180, 'Kingston', 17.9374623588942, -76.779836513002, 1, 1, 1, 1, 2, 1, 160, 18, 100, '10000000009'),
	('00000000-0000-0000-0000-000000000010', 'Hunter', NULL, '1996-02-24', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 2, 1, 12, 1, 160, 18, 100, '10000000010'),
	('00000000-0000-0000-0000-000000000011', 'Tiffany', NULL, '1991-02-08', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 2, 2, 11, 1, 160, 18, 100, '10000000011'),
	('00000000-0000-0000-0000-000000000012', 'Venus', NULL, '1999-02-12', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 4, 2, 11, 1, 160, 18, 100, '10000000012'),
	('00000000-0000-0000-0000-000000000013', 'Q', NULL, '1994-03-08', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 2, 1, 12, 1, 160, 18, 100, '10000000013'),
	('00000000-0000-0000-0000-000000000014', 'Maria', NULL, '1975-10-13', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 2, 1, 2, 2, 7, 1, 160, 18, 100, '10000000014'),
	('00000000-0000-0000-0000-000000000015', 'Liz', NULL, '1988-03-18', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 2, 1, 2, 2, 12, 1, 160, 18, 100, '10000000015'),
	('00000000-0000-0000-0000-000000000016', 'Ben', NULL, '1992-03-25', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 1, 1, 1, 1, 160, 18, 100, '10000000016'),
	('00000000-0000-0000-0000-000000000017', 'Charlie', NULL, '1997-12-22', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 2, 1, 10, 1, 160, 18, 100, '10000000017'),
	('00000000-0000-0000-0000-000000000018', 'Kenzie', NULL, '1994-08-06', 180, 'Montego Bay', 18.4989969343249, -77.9174517446859, 1, 1, 2, 2, 5, 1, 160, 18, 100, '10000000018');

insert into "public"."profile_ethnicities" ("profile_id", "ethnicity_id") values
	('00000000-0000-0000-0000-000000000000', 1),
	('00000000-0000-0000-0000-000000000001', 9),
	('00000000-0000-0000-0000-000000000002', 2),
	('00000000-0000-0000-0000-000000000003', 3),
	('00000000-0000-0000-0000-000000000004', 7),
	('00000000-0000-0000-0000-000000000005', 10),
	('00000000-0000-0000-0000-000000000006', 9),
	('00000000-0000-0000-0000-000000000007', 1),
	('00000000-0000-0000-0000-000000000008', 1),
	('00000000-0000-0000-0000-000000000009', 1),
	('00000000-0000-0000-0000-000000000010', 9),
	('00000000-0000-0000-0000-000000000011', 1),
	('00000000-0000-0000-0000-000000000012', 4),
	('00000000-0000-0000-0000-000000000013', 1),
	('00000000-0000-0000-0000-000000000014', 4),
	('00000000-0000-0000-0000-000000000015', 9),
	('00000000-0000-0000-0000-000000000016', 9),
	('00000000-0000-0000-0000-000000000017', 9),
	('00000000-0000-0000-0000-000000000018', 9);

insert into "public"."profile_pets" ("profile_id", "pet_id") values
	('00000000-0000-0000-0000-000000000000', 1),
	('00000000-0000-0000-0000-000000000000', 2);

insert into "public"."profile_pronouns" ("profile_id", "pronoun_id") values
	('00000000-0000-0000-0000-000000000000', 4),
	('00000000-0000-0000-0000-000000000000', 5),
	('00000000-0000-0000-0000-000000000000', 6);

insert into "public"."profile_gender_preferences" ("profile_id", "gender_id") values
	('00000000-0000-0000-0000-000000000000', 2),
	('00000000-0000-0000-0000-000000000001', 2),
	('00000000-0000-0000-0000-000000000002', 1),
	('00000000-0000-0000-0000-000000000003', 2),
	('00000000-0000-0000-0000-000000000004', 1),
	('00000000-0000-0000-0000-000000000005', 1),
	('00000000-0000-0000-0000-000000000006', 1),
	('00000000-0000-0000-0000-000000000007', 2),
	('00000000-0000-0000-0000-000000000008', 1),
	('00000000-0000-0000-0000-000000000009', 2),
	('00000000-0000-0000-0000-000000000010', 2),
	('00000000-0000-0000-0000-000000000011', 1),
	('00000000-0000-0000-0000-000000000012', 1),
	('00000000-0000-0000-0000-000000000013', 2),
	('00000000-0000-0000-0000-000000000014', 1),
	('00000000-0000-0000-0000-000000000015', 1),
	('00000000-0000-0000-0000-000000000016', 2),
	('00000000-0000-0000-0000-000000000017', 2),
	('00000000-0000-0000-0000-000000000018', 1);

insert into "public"."profile_answers" ("id", "profile_id", "prompt_id", "answer_text", "answer_order", "is_active") values
	('00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 1, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 2, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 3, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 4, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 5, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 6, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 7, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 8, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 9, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 10, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 11, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 12, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 13, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 14, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 15, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 16, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 17, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 18, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 19, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 20, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 21, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 22, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 23, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 24, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 25, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 26, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 27, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 28, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 29, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 30, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 31, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 32, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 33, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 34, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 35, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 36, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 37, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 38, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 39, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 40, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 41, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 42, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 43, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 44, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 45, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 46, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 47, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 48, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 49, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 50, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 51, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 52, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 53, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 54, 'Facere qui veniam accusantium id dolorem omnis.', 2, true),
	('00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 55, 'Est debitis esse et neque fugit qui sed porro incidunt internos!', 0, true),
	('10000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 56, 'Qui eligendi nihil qui doloremque galisum ut maiores Quis.', 1, true),
	('20000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 57, 'Facere qui veniam accusantium id dolorem omnis.', 2, true);

insert into "public"."profile_photos" ("id", "profile_id", "photo_url", "photo_order", "is_active") values
	('00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'https://www.instagram.com/p/B0cV-XwB2ML/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'https://www.instagram.com/p/BhFvO_Kh036/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'https://www.instagram.com/p/Bb8jR-gj2SF/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'https://www.instagram.com/p/DCrVMrnsdm-/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'https://www.instagram.com/p/DCex002OCLP/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000000', 'https://www.instagram.com/p/C_JHSSitBbA/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'https://www.instagram.com/p/C5Ef_4ZvU4D/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'https://www.instagram.com/p/C4oNwMWSHfh/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'https://www.instagram.com/p/C84mL6Vu5Be/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'https://www.instagram.com/p/CzR-v-fvnIt/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'https://www.instagram.com/p/Bv-G5DUhhcP/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'https://www.instagram.com/p/Bo0Gz3KB0bs/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'https://www.instagram.com/p/CxmaD9bLx4T/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'https://www.instagram.com/p/CxW8FqPL_ZN/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'https://www.instagram.com/p/CLOYQ5Rj1_B/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'https://www.instagram.com/p/Ce-IiLGLCz0/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'https://www.instagram.com/p/Cc_t3CUp91Q/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'https://www.instagram.com/p/CSDA8cShOl5/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'https://www.instagram.com/p/C7wN9RTRpxG/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'https://www.instagram.com/p/C7rtohAx2Ev/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'https://www.instagram.com/p/C7OwUyhx9xV/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'https://www.instagram.com/p/C7Ou-c8x7ar/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'https://www.instagram.com/p/C7OgfQgO8tr/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'https://www.instagram.com/p/CyMy8FCsbi1/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 'https://www.instagram.com/p/Cv7Y6_mPVHY/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 'https://www.instagram.com/p/C0R-B_uxm-4/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 'https://www.instagram.com/p/C6Aay_3sTXB/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 'https://www.instagram.com/p/CytB17DLxlt/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 'https://www.instagram.com/p/CxFoLUNOlZo/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', 'https://www.instagram.com/p/Cx8Bm0nuQzX/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 'https://www.instagram.com/p/C7E4HWmxYCY/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 'https://www.instagram.com/p/C7ageT2R5mg/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 'https://www.instagram.com/p/C3XZXYYO-Ru/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 'https://www.instagram.com/p/C2nXfMCOAoR/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 'https://www.instagram.com/p/Clw7VbHvdiX/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', 'https://www.instagram.com/p/CWQtkGcrYgz/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 'https://www.instagram.com/p/C8ckdKXPlzM/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 'https://www.instagram.com/p/CL3EFlSFMog/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 'https://www.instagram.com/p/C4-TVF3OJeD/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 'https://www.instagram.com/p/CPlhN3Xtsds/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 'https://www.instagram.com/p/CsMkmhivdw6/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', 'https://www.instagram.com/p/CbloOf2ph-6/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 'https://www.instagram.com/p/Czvvh3PAbcg/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 'https://www.instagram.com/p/C2yqzmlgsCT/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 'https://www.instagram.com/p/C76jVdjRPw5/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 'https://www.instagram.com/p/C8IqQ1wx0nL/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 'https://www.instagram.com/p/C6mZJEbgmzM/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000007', 'https://www.instagram.com/p/C84cMwSx0f7/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 'https://www.instagram.com/p/C8evOL2xjtn/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 'https://www.instagram.com/p/C8VZJJRxU5Y/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 'https://www.instagram.com/p/C7pqSLGxMsm/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 'https://www.instagram.com/p/C7ZOOomx0ut/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 'https://www.instagram.com/p/C6RT7DireZ1/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000008', 'https://www.instagram.com/p/CScLuFuFzbi/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 'https://www.instagram.com/p/Cyns-rouX1i/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 'https://www.instagram.com/p/C5MgrDhJ4T-/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 'https://www.instagram.com/p/C877m_mSnSv/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 'https://www.instagram.com/p/C67T8FhpuyA/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 'https://www.instagram.com/p/C6cZSoyJYEF/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000009', 'https://www.instagram.com/p/C6J61S4J-CN/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 'https://www.instagram.com/p/C8RysHrOn4E/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 'https://www.instagram.com/p/C5j9GFcuy8U/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 'https://www.instagram.com/p/C0C6ktEOHOU/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 'https://www.instagram.com/p/Cu0p4okOsXj/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 'https://www.instagram.com/p/CJ5LslhB9L3/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000010', 'https://www.instagram.com/p/Cx53vFkODYD/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 'https://www.instagram.com/p/CF981zlHS8B/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 'https://www.instagram.com/p/C8hP5qMObBP/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 'https://www.instagram.com/p/C8Rx8rNOkO8/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 'https://www.instagram.com/p/C71oL9NO4sY/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 'https://www.instagram.com/p/C7KrFKovPCG/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000011', 'https://www.instagram.com/p/C35ItPhOlXa/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 'https://www.instagram.com/p/Cm7i4O8go_e/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 'https://www.instagram.com/p/C5mYJTUR9W_/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 'https://www.instagram.com/p/Cqq0hwygVqA/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 'https://www.instagram.com/p/C301lgqgI6H/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 'https://www.instagram.com/p/CoYQC07gb8y/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000012', 'https://www.instagram.com/p/ChBhrHggI_1/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 'https://www.instagram.com/p/Cup2az8v97E/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 'https://www.instagram.com/p/CIjuQWZjemG/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 'https://www.instagram.com/p/CLfaeQOj4N3/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 'https://www.instagram.com/p/CPD3E5CDxyF/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 'https://www.instagram.com/p/CX9vbI-vbtz/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000013', 'https://www.instagram.com/p/CWfAwJhsQ7a/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 'https://www.instagram.com/p/CvfQxE5r6Zg/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 'https://www.instagram.com/p/CvfRCfQLKYH/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 'https://www.instagram.com/p/C1CmbWCRUgc/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 'https://www.instagram.com/p/CyVu3rzLmFM/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 'https://www.instagram.com/p/C2XLq_XOVpK/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000014', 'https://www.instagram.com/p/C5hU1g0Ra6B/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 'https://www.instagram.com/p/B9A-52enLCv/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 'https://www.instagram.com/p/B9aC3XhnxDL/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 'https://www.instagram.com/p/B8r4XmiHzSP/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 'https://www.instagram.com/p/B9G3kbhHgBi/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 'https://www.instagram.com/p/B9-kj9Gn1UM/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000015', 'https://www.instagram.com/p/B_xguCWHYsH/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 'https://www.instagram.com/p/C8uVAtwuQcI/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 'https://www.instagram.com/p/CmPBfPIOTap/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 'https://www.instagram.com/p/CfWmrJ1DQ1L/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 'https://www.instagram.com/p/CWv_kcyLdr_/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 'https://www.instagram.com/p/CMSamxzFNNq/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000016', 'https://www.instagram.com/p/Cm7mk_vr6_Z/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 'https://www.instagram.com/p/C79gc8ARGWt/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 'https://www.instagram.com/p/C7XUdq6xV_8/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 'https://www.instagram.com/p/C3_MUXmOc-c/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 'https://www.instagram.com/p/Cvw2cu0uIUd/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 'https://www.instagram.com/p/Bfo1RfqAYDK/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000017', 'https://www.instagram.com/p/BNVSRGAhCrM/media?size=l', 5, true),
	('00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 'https://www.instagram.com/p/C2tDVkAOzsd/media?size=l', 0, true),
	('10000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 'https://www.instagram.com/p/C2QpJPsu0JQ/media?size=l', 1, true),
	('20000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 'https://www.instagram.com/p/CDAOVA0htSL/media?size=l', 2, true),
	('30000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 'https://www.instagram.com/p/CeugkSIu6zE/media?size=l', 3, true),
	('40000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 'https://www.instagram.com/p/CUoHPK0sTIM/media?size=l', 4, true),
	('50000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000018', 'https://www.instagram.com/p/CLAgyMap3Ok/media?size=l', 5, true);

insert into "public"."interaction_status" ("id", "status") values
	(1, 'skip'),
	(2, 'like'),
	(3, 'remove'),
	(4, 'match'),
	(5, 'unmatch'),
	(6, 'review');
-- Add new seed data or update existing profiles

-- First clear existing data if needed (optional)
-- DELETE FROM profiles WHERE id NOT IN (SELECT id FROM profiles WHERE user_id = auth.uid());

-- Update existing profiles only with new fields (don't try to insert new ones yet)
UPDATE profiles
SET 
  user_role = CASE 
    WHEN random() < 0.5 THEN 'startup' 
    ELSE 'candidate' 
  END,
  one_line_description = CASE 
    WHEN random() < 0.5 THEN 'Innovative startup revolutionizing tech' 
    ELSE 'Passionate professional with expertise' 
  END,
  looking_for_roles = CASE
    WHEN random() < 0.5 THEN ARRAY['Frontend', 'Backend', 'Full Stack']
    ELSE NULL
  END;

-- Leave out the INSERT part for now until we can verify the correct IDs

-- Update profiles with sample data for funding_stage, offer_details, and why_us_platform
UPDATE profiles
SET 
  funding_stage = CASE 
    WHEN user_role = 'startup' THEN 
      (ARRAY['Pre-seed', 'Seed', 'Series A', 'Series B', 'Bootstrapped', 'Revenue Generating'])[floor(random() * 6) + 1]
    ELSE NULL
  END,
  offer_details = CASE
    WHEN user_role = 'startup' THEN 
      jsonb_build_object(
        'salary_range', (ARRAY['$80K-$120K', '$100K-$150K', '$120K-$180K', 'Competitive'])[floor(random() * 4) + 1],
        'equity', (ARRAY['0.1-0.5%', '0.5-1.5%', '1-3%', 'Negotiable'])[floor(random() * 4) + 1],
        'remote', random() > 0.5,
        'benefits', (ARRAY[
          jsonb_build_array('Health Insurance', 'Flexible Hours', '401K Match'),
          jsonb_build_array('Unlimited PTO', 'Remote Work', 'Stock Options'),
          jsonb_build_array('Health Benefits', 'Professional Development', 'Gym Membership')
        ])[floor(random() * 3) + 1]
      )
    ELSE NULL
  END,
  why_us_platform = CASE
    WHEN user_role = 'startup' THEN
      (ARRAY[
        'We''re revolutionizing the industry with innovative technology and a passionate team.',
        'Join us to work on challenging problems with industry-leading experts.',
        'We offer exceptional growth opportunities and a collaborative culture.',
        'Our mission is to create meaningful impact while prioritizing work-life balance.',
        'Be part of a diverse team building the next generation of technology solutions.'
      ])[floor(random() * 5) + 1]
    ELSE NULL
  END
WHERE user_role IN ('startup', 'candidate');

-- Update candidate profiles with skills data
UPDATE profiles
SET skills = CASE
  WHEN user_role = 'candidate' THEN 
    (ARRAY['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript'])[1:floor(random() * 5) + 1]
  ELSE 
    NULL
  END
WHERE user_role = 'candidate';

-- Update candidate profiles with projects data
UPDATE profiles
SET projects = 
  jsonb_build_array(
    jsonb_build_object(
      'id', gen_random_uuid(),
      'title', 'E-commerce Platform',
      'description', 'Built a full-stack e-commerce platform with React, Next.js, and PostgreSQL. Implemented user authentication, product management, and payment processing.',
      'project_order', 0,
      'media', jsonb_build_array(
        jsonb_build_object(
          'id', gen_random_uuid(),
          'media_type', 'image',
          'url', 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000',
          'media_order', 0
        ),
        jsonb_build_object(
          'id', gen_random_uuid(),
          'media_type', 'url',
          'url', 'https://github.com/example/ecommerce',
          'media_order', 1
        )
      )
    ),
    jsonb_build_object(
      'id', gen_random_uuid(),
      'title', 'Mobile App Development',
      'description', 'Created a cross-platform mobile app using React Native with Firebase integration. Features include real-time chat, user profiles, and geo-location services.',
      'project_order', 1,
      'media', jsonb_build_array(
        jsonb_build_object(
          'id', gen_random_uuid(),
          'media_type', 'image',
          'url', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000',
          'media_order', 0
        )
      )
    ),
    jsonb_build_object(
      'id', gen_random_uuid(),
      'title', 'AI Recommendation Engine',
      'description', 'Developed a machine learning recommendation system that analyzes user behavior to provide personalized content suggestions, increasing engagement by 45%.',
      'project_order', 2,
      'media', jsonb_build_array(
        jsonb_build_object(
          'id', gen_random_uuid(),
          'media_type', 'image',
          'url', 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1000',
          'media_order', 0
        ),
        jsonb_build_object(
          'id', gen_random_uuid(),
          'media_type', 'demo_link',
          'url', 'https://demo.example.com/ai-recommendation',
          'media_order', 1
        )
      )
    )
  )
WHERE user_role = 'candidate' AND (projects IS NULL OR jsonb_array_length(projects) = 0);
