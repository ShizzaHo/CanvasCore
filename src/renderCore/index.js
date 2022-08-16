let lastRender = new Date();

export function render(func) {
    const delta = new Date() - lastRender;
    
    func()

    requestAnimationFrame(()=>{render(func)});
}