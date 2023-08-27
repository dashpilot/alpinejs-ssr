import { compile } from "./index.js";

const html = `
   <div id="app" x-data="app()">
     
        <section class="header h-100">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-6">
                <img src="/templates/homebase/img/planet.png" class="img-fluid">
              </div>
              <div class="col-md-6 mx-auto" data-edit="header">
                <div>
                  <h2 x-html="data.header.title"></h2>
                  <p x-html="data.header.body"></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="row">
        <template x-for="item in data.items">
                <div class="col-md-4" data-edit="items" :id="item.id">
                  <img :src="item.img" class="img-fluid w-50">
                  <h3 x-html="item.title"></h3>
                  <p x-html="item.body"></p>
                </div>
         </template>
         </div>

         <template x-if="data.header.subtitle">
            <div x-text="data.header.subtitle"></div>
        </template>

  </div>
`;

const data = {
  header: {
    title: "Welcome to our site.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus non turpis congue congue. Integer porttitor non leo.",
  },
  items: [
    {
      id: "item-1",
      img: "/img/blobs1.png",
      title: "Feature One",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tortor neque.",
      layout: "post",
    },
    {
      id: "item-2",
      img: "/img/blobs2.png",
      title: "Feature Two",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tortor neque.",
      layout: "post",
    },
    {
      id: "item-3",
      img: "/img/blobs3.png",
      title: "Feature Three",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tortor neque.",
      layout: "post",
    },
  ],
};

console.log(compile(html, data));
