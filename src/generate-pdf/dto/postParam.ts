/*
POST параметры для передачи настроеек для генерации pdf
полный список на офф документации:
 https://github.com/puppeteer/puppeteer/blob/7c0a7b92cf98033425b78e1e7a96bb440a636123/src/common/PDFOptions.ts#L74
*/
export class postParam{
    /**
     * верстка
     */
    readonly html: string;
    /**
     * масштабирование
     */
    readonly scale?: number;
    /**
     * Показывать ли верхний и нижний колонтитулы.
     */
    readonly displayHeaderFooter?: boolean;
    /**
     * HTML-шаблон для заголовка печати. Должен быть действительный HTML со следующим
     * классы, используемые для вставки в них значений:
     * - дата печати в формате `date`
     *
     * - `title` заголовок документа
     *
     * - `url` расположение документа
     *
     * - `pageNumber` номер текущей страницы
     *
     * - `totalPages` общее количество страниц в документе
     */
    readonly headerTemplate?: string;
    /**
     * HTML-шаблон для нижнего колонтитула печати. Имеет те же ограничения и поддержку
     */
    readonly footerTemplate?: string;
    /**
     * Установите значение «true» для печати фоновой графики.
     */
    readonly printBackground?: boolean;
    /**
     * печатать в альбомной ориентации.
     */
    readonly landscape?: boolean;

    /**
     * Диапазон бумаги для печати, например, «1–5, 8, 11–13».
     */
    readonly pageRanges?: string;

    /**
     * Формат печати
     */
    readonly format: string;


}