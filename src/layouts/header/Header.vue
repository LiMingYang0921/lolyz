<template>
  <div class="header">
    <div class="left">
      <img src="@/assets/images/log.webp" alt="" />
      <div class="name">
        <a>探索</a>
        <img src="@/assets/images/lol.png" alt="" />
      </div>
    </div>
    <div class="tab">
      <img src="@/assets/images/yz.webp" alt="" />
      <div class="line"></div>
      <ul>
        <li v-for="(tab, index) in tabList" :class="{ choose: currentRoute === tab.router }" :key="index">
          <div>{{ tab.name }}</div>
          <div class="enName">{{ tab.enName }}</div>
        </li>
      </ul>
    </div>
    <div class="router"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
interface ITabList {
  name: string
  enName: string
  router: string
  bottom?: boolean
}
const tabList: ITabList[] = [
  {
    name: '专题',
    enName: 'FEATURED',
    router: ''
  },
  {
    name: '英雄',
    enName: 'CHAMPIONS',
    router: '/champions'
  },
  {
    name: '地区',
    enName: 'REGIONS',
    router: '/regions'
  },
  {
    name: '漫画',
    enName: 'COMICS',
    router: '/comics'
  },
  {
    name: '集锦',
    enName: 'COLLECTIONS',
    router: '/collections'
  },
  {
    name: '另一个宇宙',
    enName: 'ALT UNIVERSE',
    router: '/altUniverse'
  },
  {
    name: '地图',
    enName: 'MAP',
    router: '/map'
  },
  {
    name: '探索',
    enName: 'EXPLORE',
    router: '/explore'
  }
]
export default defineComponent({
  name: 'TabComponent',
  setup () {
    const currentRoute = ref<string>('')
    return { tabList, currentRoute }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(18, 18, 18);
  height: 64px;
  border-bottom: 2px solid #262626;

  .left {
    display: flex;
    align-items: center;

    .name {
      display: flex;
      flex-direction: column;

      a {
        color: #a29490;
        cursor: pointer;
      }

      a:hover {
        color: #fff;
      }
    }
  }

  .tab {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .line {
      width: 2px;
      height: 30px;
      background: #262626;
    }

    ul {
      display: flex;

      li {
        color: #c9aa71;
        padding: 15px 0 10px 0;
        margin: 0 20px;
        text-align: center;
        font-family: 'Microsoft YaHei';
        font-size: 14px;
        cursor: pointer;

        .enName {
          font-size: 12px;
          margin-top: 1px;
        }
      }

      .choose {
        color: #fff;
        border-bottom: 1px solid #c79a3c;
      }

      li:hover {
        color: #fff;
        border-bottom: 1px solid #c79a3c;
      }
    }
  }
}
</style>
