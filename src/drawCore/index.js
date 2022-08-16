export default class DrawCore {
    
    /**
     * Создает новый прямоугольник
     * @param  {Object} options Параметры для нового прямоугольника
     */
    newRect(options = {}){
        this.ctx.fillStyle = options.fillColor ? options.fillColor : "black";
        this.ctx.fillRect(
            options.x ? options.x : 0, 
            options.y ? options.y : 0, 
            options.width ? options.width : 0,
            options.height ? options.height : 0
        );
    }

    /**
     * Создает новую прямоугольную обводку
     * @param  {Object} options Параметры для новой прямоугольной обводки
     */
    newStrokeRect(options = {}){
        this.ctx.strokeStyle = options.fillColor ? options.fillColor : "black";
        this.ctx.lineWidth = options.lineWidth;
        this.ctx.lineJoin = options.lineJoin;
        this.ctx.strokeRect(
            options.x ? options.x : 0, 
            options.y ? options.y : 0, 
            options.width ? options.width : 0,
            options.height ? options.height : 0
        );
    }
}