

      var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        console.log('dsa')
        player = new YT.Player('YTplayer', {
          height: '390',
          width: '640',
          videoId: '4T2JMu2a950'
        });
      }


    $(function(){

        var pixelsHolder = $('.zitec-pixels'),
            pixelsBg = pixelsHolder.find('.pixels'),
            w = pixelsHolder.width(),
            h = pixelsHolder.height();

            console.log(w, h);

            for (i=0; i<30; i++){
                pixelsBg.append('<span class="pixel'+(i+1)+'"></span>');
            }



        $('.video-cover').click(function(){
            player.playVideo();
            $(this).addClass('clicked');
        })




    });
