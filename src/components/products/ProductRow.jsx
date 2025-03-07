/**
 * 
 * @param {{name: string, stocked: boolean, price: string, category: string}} product  
 */
export function ProductRow ({product}) {

    const style = product.stocked ? undefined : {color: 'red'}

    const handleClick = () => {
        throw new Error('misclicked')
    }

    return <tr onClick={handleClick}>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}