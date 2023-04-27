// s1 outfit
let s1 = document.querySelector("#s1"); // get #s1 outfit

function hideAllOutfits() {
  let outfits = document.getElementsByClassName("outfit");
  for (let i = 0; i < outfits.length; i++) {
    outfits[i].style.display = "none";
  }
}

s1.onclick = function () {
  // 1. hide #body (set display to none)
  let body = document.querySelector("#body");
  body.style.display = "none";
  
  // 2. call the function you created to hide all the outfits
  hideAllOutfits();
  
  // 3. show #o1 outfit (set display to block)
  let o1 = document.querySelector("#o1");
  o1.style.display = "block";
};

// s2 outfit
let s2 = document.querySelector("#s2"); // get #s2 outfit
s2.onclick = function () {
  // 1. hide #body (set display to none)
  let body = document.querySelector("#body");
  body.style.display = "none";
  
  // 2. call the function you created to hide all the outfits
  hideAllOutfits();
  
  // 3. show #o2 outfit (set display to block)
  let o2 = document.querySelector("#o2");
  o2.style.display = "block";
};

// s3 outfit
let s3 = document.querySelector("#s3"); // get #s3 outfit
s3.onclick = function () {
  // 1. hide #body (set display to none)
  let body = document.querySelector("#body");
  body.style.display = "none";
  
  // 2. call the function you created to hide all the outfits
  hideAllOutfits();
  
  // 3. show #o3 outfit (set display to block)
  let o3 = document.querySelector("#o3");
  o3.style.display = "block";
};

// s4 outfit
let s4 = document.querySelector("#s4"); // get #s4 outfit
s4.onclick = function () {
  // 1. hide #body (set display to none)
  let body = document.querySelector("#body");
  body.style.display = "none";
  
  // 2. call the function you created to hide all the outfits
  hideAllOutfits();
  
  // 3. show #o4 outfit (set display to block)
  let o4 = document.querySelector("#o4");
  o4.style.display = "block";
};

// s5 outfit
let s5 = document.querySelector("#s5"); // get #s5 outfit
s5.onclick = function () {
  // 1. hide #body (set display to none)
  let body = document.querySelector("#body");
  body.style.display = "none";
  
  // 2. call the function you created to hide all the outfits
  hideAllOutfits();
  
  // 3. show #o5 outfit (set display to block)
  let o5 = document.querySelector("#o5");
  o5.style.display = "block";
};

// strip outfit
let strip = document.querySelector("#strip-button");
strip.onclick = function () {
  // call the function you created to hide all the outfits
  hideAllOutfits();
  
  // show #body
  let body = document.querySelector("#body");
  body.style.display = "block";
};
