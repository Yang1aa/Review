import React from 'react'

function B() {
    console.log('B组件渲染')
    return (
        <div>
            <h1>B组件</h1>
        </div>
    )
}
export default React.memo(B);