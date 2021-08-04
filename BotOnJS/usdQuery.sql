INSERT INTO "courseCB" (id_currency, course_currency, date_course)
VALUES (1, 73.1987, '22-06-2021');

INSERT INTO "courseBanks" (course_purchase, bank_purchase, course_sale, bank_sale)
VALUES (73.4, 'Азиатско-Тихоокеанский Банк', 72.81, 'Банк «Открытие»');

TRUNCATE "courseCB", "courseBanks"; -- Удаление данных из перечисленных таблиц

CREATE TABLE IF NOT EXISTS public."courseCB"
(
    "id_note_сourse" bigserial NOT NULL,
    id_currency integer,
    course_currency real,
    date_course date,
    PRIMARY KEY ("id_note_сourse")
);

ALTER TABLE public."courseCB"
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public."courseBanks"
(
    id_note_banks bigserial NOT NULL,
    id_note_course bigserial,
    course_purchase real,
    bank_purchase character varying(255),
    course_sale real,
    bank_sale character varying(255),
    PRIMARY KEY (id_note_banks),
    FOREIGN KEY (id_note_course)
        REFERENCES public."courseCB" ("id_note_сourse") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE public."courseBanks"
    OWNER to postgres;

-- Запрос проверочный 
SELECT
   DISTINCT date_course
FROM
   courseCB
ORDER BY
   id_note_сourse;


-- Запрос на средний курс доллара на сегодня