<template>
  <div>See Tests panel</div>
</template>

<script>
export default {
  props: {
    ObjectWithStuffInIt: {
      type: Array,
      default: () => [{ id: 1, bar: false }, { id: 2, bar: false }]
    }
  },
  data() {
    return {
      foo: "foo"
    };
  },
  methods: {
    doSomeWork() {
      debugger;
      if (this.foo === "diddly") {
        for (const obj of this.ObjectWithStuffInIt) {
          obj.bar = true;
        }
      }
    }
  }
};
</script>
