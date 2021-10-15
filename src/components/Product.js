function Product(props) {
    const { id, img, name, price, onAddClick } = props;

    function onClick(e) {
        e.preventDefault();
        onAddClick(id);
    }
    return (
        <div className="Product">
            {<img src={img} alt={name} width="100px" id={id}></img>}
            <br />
            {name}
            <br />
            Price:&nbsp;${price}
            <br />
            <button
                type="button"
                onClick={(e) => onClick(e)}
                className="addtocartbtn"
            >
                Add to cart
            </button>
        </div>
    );
}

export default Product;
