import React from 'react'
import { useState, useEffect } from 'react'
import styles from './draw.module.css'
import number from '../../assets/images/010.png'

interface countInterface {
  count: number
}

export const Draw: React.FC<countInterface> = (props) => {
  // 上次的值
  const [oldNum, setOldNum] = useState(0)
  // 记录上次的偏移的位置
  const [oldOffset, setOldOffset] = useState(0)
  // 上次的差值是否小于0
  const [chazhiValue, setChazhiValue] = useState(false)
  // css值做动画
  const [newStyle, setNewStyle] = useState<{}>({
    transform: 'translateY(0)',
  })

  useEffect(() => {
    // 是否小于零，用于处理第二个数小于第一个数往下滚的问题
    // 这里添加如果小于零，就继续往上滚，滚动结束手动执行切换到第一张图片
    // 比如第一次是5，第二次是3，需要便宜多少呢 10 - （5-3）
    // 第一次是 8，第二次是 5，得出 10 - 8 + 5 = 7
    // 6 8
    let isXiaoyu = props.count - oldNum < 0
    setChazhiValue(isXiaoyu)
    // 计算差值
    let chazhi = Math.abs(props.count - oldNum)
    // 根据差值大于小于0计算滚动时间
    // let time = (isXiaoyu ? 10 - chazhi : chazhi) * 0.2
    let time = 1
    // 根据差值大于小于0计算滚动滚动距离
    var distance = 0

    if (isXiaoyu) {
      distance = isXiaoyu
        ? -(10 - chazhi) * 30 - 30 * oldNum
        : -props.count * 30
    } else {
      distance = -props.count * 30
    }
    setNewStyle({
      transform: `translateY(${distance}px)`,
      transition: `ease-out ${time}s`,
    })
    setOldOffset(distance)
    setOldNum(props.count)
  }, [props.count])
  // 处理小于0 动画结束需要设置到第一张图片的对应数组的位置
  useEffect(() => {
    // 这里计算回到哪个数组
    // 行高为30 上次为 8 这次为3
    // 偏移的距离为 30*8 + 30 * (10 - 8 + 3) = 390
    // -390 + 总高度300 = -90 偏移90 就是第一张图的3
    if (chazhiValue) {
      let offset = oldOffset + 30 * 10
      if (oldOffset + 30 * 10 <= 0) {
        setTimeout(() => {
          setNewStyle({
            transform: `translateY(${offset}px)`,
            transition: `ease-out 0s`,
          })
        }, 1000)
        setChazhiValue(false)
      }
    }
  }, [newStyle])

  return (
    <div className={styles.page}>
      <div className={styles['test-div']}>
        <div className={styles['scroll-bg']} style={newStyle}>
          <img className={styles.img} src={number} alt="" />
          <img className={styles.img} src={number} alt="" />
        </div>
      </div>
    </div>
  )
}
