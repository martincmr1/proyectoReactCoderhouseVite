import { useParams } from "react-router-dom"

function OrderConfirm() {
    const {orderid} = useParams()
  return (
    <div><h2>Gracias por elegirnos  </h2>
<small>tu comprobante es: <b>{orderid}</b></small>
    </div>
  )
}

export default OrderConfirm