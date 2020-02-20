<template>
  <div>
    <h2>分类</h2>
    <div ref="content" class="content">
      <ul>
        <li>1类</li>
        <li>2类</li>
        <li>3类</li>
        <li>4类</li>
        <li>5类</li>
        <li>6类</li>
        <li>7类</li>
        <li>8类</li>
        <li>9类</li>
        <li>10类</li>
        <li>11类</li>
        <li>12类</li>
        <li>13类</li>
        <li>14类</li>
        <li>15类</li>
        <li>16类</li>
        <li>17类</li>
        <li>18类</li>
        <li>19类</li>
        <li>20类</li>
        <li>21类</li>
        <li>22类</li>
        <li>23类</li>
        <li>24类</li>
        <li>25类</li>
        <li>26类</li>
        <li>27类</li>
        <li>28类</li>
        <li>29类</li>
        <li>30类</li>
        <li>31类</li>
        <li>32类</li>
        <li>33类</li>
        <li>34类</li>
        <li>35类</li>
        <li>36类</li>
        <li>37类</li>
        <li>38类</li>
        <li>39类</li>
        <li>40类</li>
        <li>41类</li>
        <li>42类</li>
        <li>43类</li>
        <li>44类</li>
        <li>45类</li>
        <li>46类</li>
        <li>47类</li>
        <li>48类</li>
        <li>49类</li>
        <li>50类</li>
        <li>51类</li>
        <li>52类</li>
        <li>53类</li>
        <li>54类</li>
        <li>55类</li>
        <li>56类</li>
        <li>57类</li>
        <li>58类</li>
        <li>59类</li>
        <li>60类</li>
        <li>61类</li>
        <li>62类</li>
        <li>63类</li>
        <li>64类</li>
        <li>65类</li>
        <li>66类</li>
        <li>67类</li>
        <li>68类</li>
        <li>69类</li>
        <li>70类</li>
        <li>71类</li>
        <li>72类</li>
        <li>73类</li>
        <li>74类</li>
        <li>75类</li>
        <li>76类</li>
        <li>77类</li>
        <li>78类</li>
        <li>79类</li>
        <li>80类</li>
        <li>81类</li>
        <li>82类</li>
        <li>83类</li>
        <li>84类</li>
        <li>85类</li>
        <li>86类</li>
        <li>87类</li>
        <li>88类</li>
        <li>89类</li>
        <li>90类</li>
        <li>91类</li>
        <li>92类</li>
        <li>93类</li>
        <li>94类</li>
        <li>95类</li>
        <li>96类</li>
        <li>97类</li>
        <li>98类</li>
        <li>99类</li>
        <li>100类</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Category',
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.content, {
        click: true,
        // probeType: 3
        pullUpLoad: true
      })
      this.scroll.on('scroll', position => {
        console.log(position)
        
      })
    }
}
</script>

<style scoped>
.content {
height: 300px;
background-color: red;
overflow: hidden;
}
</style>