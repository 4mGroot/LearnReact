import PropTypes from 'prop-types';
const Item =(props)=>{ 
    const {title,amount}=props
    return (
        <li>{title}<span>{amount}</span></li>
    )
}
Item.propTypes={
    // title ต้องเป็นสตริง amout ต้องวเป็น number isrequid=บังคับให้ป้อน
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item