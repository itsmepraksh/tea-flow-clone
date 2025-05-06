

// gsap.to(".img-info",{
//   scrollTrigger: {
//     trigger: ".page1",
//     pin : true,
//     // markers:true,
//     start: "top 18%",
//     end: "bottom bottom",
//     endTrigger : ".last",
//     scrub:1
//   },
//   y:"-510%",
//   ease: Power1,
// })




// let sections = document.querySelectorAll(".img-info")


// Shery.imageEffect(".images",{
//   style:3,
//   config : { onMouse: { value:1 } },

//   slideStyle: (setScroll) => {
//      sections.forEach(function( section, index){
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 50%",
//         end: "bottom 20%",
//         // markers:true,
//         scrub : 1,
//         onUpdate: function(prog) {
//           setScroll(prog.progress+index)
//         }
//       })
//      })
//   }
// })



window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 768) {

    // Your GSAP + Shery code here
 

  // --- GSAP ScrollTrigger animation ---
  gsap.to(".img-info", {
    scrollTrigger: {
      trigger: ".page1",
      pin: true,
      // markers: true,
      start: "top 18%",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1
    },
    y: "-510%",
    ease: Power1,
  });

  // --- Image effect with scroll syncing ---
  let sections = document.querySelectorAll(".img-info");

  Shery.imageEffect(".images", {
    style: 3,
    config: { onMouse: { value: 1 } },

    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 20%",
          // markers: true,
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          }
        });
      });
    }
  });
 }
});

 

 

