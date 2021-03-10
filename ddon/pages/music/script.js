new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [],
      currentTrack: { name: "", artist: "", cover: "", source: "", url: "", favorited: false },
      currentTrackIndex: 0,
      transitionName: null,
      musicIds: ["310690", "109530", "277766"]
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    async prevTrack() {
      if (this.currentTrackIndex > 0) {
        this.transitionName = "scale-in";        
        this.isShowCover = false;
        this.currentTrackIndex--;
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      }
    },
    async nextTrack() {
      if (this.currentTrackIndex < this.musicIds.length - 1) {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        this.currentTrackIndex++;

        let id = this.musicIds[this.currentTrackIndex]
        let music = await this.musicInit(id);
        await this.addMusic(music);

        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      }
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    },
    async musicInit(id) {
      var music = { favorited: true }
      // 歌曲信息      
      await axios.get('http://47.105.149.144:3000/song/detail?ids=' + id)
        .then(async (res) => {
          music.name = res.data.songs[0].name;
          music.artist = res.data.songs[0].ar[0].name;
          music.cover = res.data.songs[0].al.picUrl;
          // 歌曲url
          await axios.get('http://47.105.149.144:3000/song/url?id=' + id)
            .then((res) => {
              music.source = res.data.data[0].url
            });
        });
      return music;
    },
    async addMusic(music) {
      await this.tracks.forEach(element => {
        if (element.id === music.id) {
          return;
        }
      });
      this.tracks.push(music);
    }
  },
  async created() {
    let music = await this.musicInit(this.musicIds[0]);

    this.tracks.push(music);
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // 可以去除
    // this is optional (for preload covers)
    // for (let index = 0; index < this.tracks.length; index++) {
    //   const element = this.tracks[index];
    //   let link = document.createElement('link');
    //   link.rel = "prefetch";
    //   link.href = element.cover;
    //   link.as = "image"
    //   document.head.appendChild(link)
    // }
  }
});