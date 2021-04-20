<template>
  <div id="map-view"></div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  setup(context) {
      AMapLoader.load({
        "key": "4ecbc25ada526ad0aefbd446c11bb1b9",                                          // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        "AMapUI": {                                         // 是否加载 AMapUI，缺省不加载
            "version": '1.1',                               // AMapUI 缺省 1.1
            "plugins":[],                                   // 需要加载的 AMapUI ui插件
        },
        "Loca":{                                            // 是否加载 Loca， 缺省不加载
            "version": '1.3.2'                              // Loca 版本，缺省 1.3.2
        },
    }).then((AMap)=>{
        const map = new AMap.Map('map-view', {
            zoom:15,  
            features: ['bg', 'road', 'building'],                                      //级别
            mapStyle: 'amap://styles/34c0b9d38e16a0856e5494c24bce24ae'
        });
        console.log(context.emit, map)
    }).catch(e => {
        console.log(e);
    })
  },
  data() {
    return {
      //   mapManager: new AMapManager(),
    };
  },
  mounted() {
    this.$nextTick(() => {
      //   this.$emit('ready', this.mapManager);
    });
  },
  //   methods: {
  //   //   handleReady(ele) {
  //   //     console.log(ele, '---->')
  //   //     this.$emit('ready', this.mapManager.getMap())
  //   //   },
  //   // },
  //   // this.$nextTick(() => {
  //   //   console.log(this.$refs.map.$$getInstance())
  //   // })

  //   // },
  // }
};
</script>
<style lang="scss" scoped>
#map-view {
  flex: 1;
}
</style>