const video = document.querySelector('.movie');
        const button = document.querySelector('button');

        
        class MediaPlayer {
            
            constructor(video){
                this.video = video
            }

            play(){
                this.video.play()
            }

            pause(){
                this.video.pause()
            }

            togglePlay(){
                if(this.video.paused){
                    this.video.play()
                }else{
                    this.video.pause()
                }
            }

        }


        const player = new MediaPlayer(video);

        button.onclick = () => player.togglePlay();