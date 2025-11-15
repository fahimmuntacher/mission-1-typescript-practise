// oop- abstraction 3rd pillar of oop
// get idea
// but implementation will be later

/*    
*iterface
* abstract class

*/

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer{
//     play(){
//         console.log('Playing music.....');
//     }
//     pause(){
//         console.log('Playing pause...');
//     }
//     stop(): void {
//         console.log('playing stop...');
//     }
// }

// const MyPlayer = new MusicPlayer()
// MyPlayer.play()

// idea given
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class FahimPlayer extends MediaPlayer{
    play(): void {
        console.log('Playing music...');        
    }
    pause(): void {
        console.log("Playingg pause");
    }
    stop(): void {
        console.log("PLaying stop");
    }
}

const player1 = new FahimPlayer();
player1.pause()