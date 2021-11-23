class AutoPause{

    constructor(){
        this.threshold = 0.5
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player){
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media);
        

        document.addEventListener('visibilitychange', () => {
            const isVisible = document.visibilityState === 'visible';
            if (document.hidden) {
                this.player.pause();
            } else {
                this.player.play();
            }
        })

    }

    handleIntersection(entries){
        const entry = entries[0]

        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
        console.log(entry)
    }

}

export default AutoPause;