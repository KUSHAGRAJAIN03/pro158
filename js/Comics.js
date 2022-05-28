AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "comic1",
          url: "./assets/thumbnails/comic1.jpeg",
        },
        {
          id: "comic2",
          url: "./assets/thumbnails/comic2.jpg",
        },
  
        {
          id: "comic3",
          url: "./assets/thumbnails/comic3.jpg",
        },
        {
          id: "comic4",
          url: "./assets/thumbnails/comic4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)
        // Title Text Element
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:22,
        height:32
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"#0077CC",
        opacity:1
      })

      entityEl.setAttribute("cursor-listener", {});


      return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"box",
        width:20,
        height:30
      })
      entityEl.setAttribute("material",{src:item.url})
      return entityEl
    },
  });
  