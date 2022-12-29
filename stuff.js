const { createApp } = Vue

const app = createApp({
  data() {
    return {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt congue risus consectetur feugiat. Maecenas faucibus elementum ipsum at fringilla. Nam lobortis, diam eu elementum laoreet, mi sem ornare nisl, at hendrerit mauris libero a felis. Ut arcu nunc, tempus laoreet mauris maximus, semper egestas turpis. Nam eu ipsum venenatis velit volutpat consequat eget id sapien. Pellentesque sed viverra mauris. Fusce fringilla, tortor et consequat mattis, elit nisl porta velit, nec volutpat sapien quam non leo. Vivamus vulputate rhoncus interdum. Nullam at eros ipsum. Fusce molestie est mauris, ac iaculis mauris sagittis vehicula. Mauris nibh enim, gravida mattis eros facilisis, sagittis molestie arcu. In pellentesque turpis rutrum, convallis libero vulputate, faucibus dui. Donec et tempor risus, sed lobortis nisl. Morbi a volutpat metus, nec dignissim ante. Morbi eget dolor sit amet purus laoreet dictum at interdum dolor. Praesent tempus turpis vulputate tellus iaculis congue.

Etiam ultricies mollis massa, non molestie mauris fermentum sed. Suspendisse ac eros ut turpis consequat cursus vel nec ligula. Vestibulum at lacinia dui. Fusce lobortis, metus rhoncus pharetra posuere, tellus ipsum viverra justo, sit amet viverra sapien elit non orci. Suspendisse ut metus in sapien cursus faucibus. Etiam ultricies et ligula at hendrerit. Integer rutrum semper condimentum. Nam non orci aliquet, vulputate mi eu, fringilla magna.

Proin venenatis lorem vel lacus commodo vehicula. Donec imperdiet eu tellus eu tincidunt. Fusce dignissim, mi eu fermentum suscipit, orci massa condimentum lacus, in tincidunt ex metus quis tellus. Aliquam non posuere neque, vel suscipit quam. Quisque eu tempor ligula. Sed bibendum malesuada turpis, vitae commodo orci vestibulum nec. Cras sollicitudin magna quis quam pulvinar, non vestibulum tellus rhoncus. Aenean nec iaculis felis. Sed vel dui eu ante pellentesque imperdiet. Suspendisse at interdum felis. Nulla eget erat leo. Cras ut odio sit amet nunc viverra vulputate. Donec auctor luctus lacus sit amet blandit. Sed sed mollis dolor.

Etiam odio quam, viverra nec sodales a, aliquet vitae massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum elementum iaculis arcu, pellentesque auctor lectus interdum molestie. Fusce et posuere lectus. Nam ante leo, scelerisque at vestibulum vel, fringilla vel eros. Proin quis felis vitae odio faucibus tristique vitae vel magna. Mauris rhoncus ipsum a turpis bibendum, eget finibus nisl pulvinar. Nullam et mollis nisi, id mollis enim. Etiam bibendum ligula vitae ornare egestas. Mauris cursus erat quis ornare imperdiet. In sodales vitae risus vitae sollicitudin. Donec pharetra tincidunt vulputate. Mauris interdum lectus vestibulum nisi congue, eu suscipit ligula dignissim. Etiam vitae nisl vestibulum, lacinia tortor sed, eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tempus ante.

Nullam mollis pharetra lectus. Duis blandit libero ac ante rhoncus feugiat. Mauris vitae ex euismod, eleifend diam vel, iaculis nisl. Morbi consequat mattis efficitur. Nullam leo nulla, auctor eget lacus in, suscipit faucibus metus. Mauris eleifend non nulla eu sodales. Vestibulum sed arcu vel tellus ultricies efficitur. Sed et enim sed metus congue facilisis at ac enim.`,
      replacement: "pain ",
      tideLevel: 0
    }
  },
  methods: {
    rain() {
      const divider = Math.floor(Math.random() * this.text.length);
      const letter = this.replacement.charAt(divider % this.replacement.length);
      const beginning = this.text.slice(0, divider);
      const ending = this.text.slice(divider + 1);
      this.text = beginning + letter + ending
    },
    tide() {
      let divider = null, letter = null;
      do {
        divider = this.tideLevel++;
        letter = this.replacement.charAt(divider % this.replacement.length);
      } while (letter == this.text.charAt(divider))
      const beginning = this.text.slice(0, divider);
      const ending = this.text.slice(divider + 1);
      this.text = beginning + letter + ending
    }
  },
  mounted() {
    setInterval(this.rain, 30);
    setInterval(this.tide, 100);
  }
}).mount('#app')