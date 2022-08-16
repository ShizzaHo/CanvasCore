import * as enumerate from './utils/enums'
import DrawCore from './drawCore';

export default class Canvas extends DrawCore {
    canvas = null;
    ctx = null;

    /**
     * Конструктор класса Canvas
     * @param  {Object} options Параметры канваса
     */
    constructor(options){
        super();

        options.customCanvas ? null : this.create(options.canvasName, options.sizes, {styleClasses: options.styleClasses});
        this.bind(options.canvasName)
    }

    /**
     * Создает DOM элемент канваса
     * @param  {String} name Название канваса
     * @param  {Object} option Основные параметры
     * @param  {Object} other Второстепенные параметры
     */
    create(name = "defaultCanvasName", option = {}, other = {}) {
        const canvas = document.createElement("canvas");
        canvas.id = name;
        canvas.width = option.width;
        canvas.height = option.height;
        canvas.className = other.styleClasses ? other.styleClasses.join(" ") : null;
        canvas.style.zIndex = option.zIndex;
        canvas.style.display = option.display;
        canvas.style.position = option.position;
        canvas.style.top = option.x + "px";
        canvas.style.left = option.y  + "px";
        document.body.append(canvas);
    }

    /**
     * Глобальный бинд канваса
     * @param  {String} name Название канваса
     */
    bind(name) {
        this.canvas = document.getElementById(name);
        this.ctx = this.canvas.getContext('2d');
    }

    /**
     * Уничтожение канваса
     * @param  {Function} callback Функция обратного вызова
     */
    destroy(callback) {
        this.canvas.remove();
        this.canvas = null;
        callback ? callback() : null;
    }
}

export const enums = enumerate;