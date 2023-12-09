import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'
import * as S from './styles'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { closeCart, removeToCart, clearCart } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils/index'

const Cart = () => {
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const dispatch = useDispatch()
  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nameCard: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
      fullName: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      addContent: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter no mínimo 9 caracteres')
        .max(9, 'O campo precisa ter no máximo 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),

      nameCard: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: 1,
            complement: values.addContent
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const toCloseCart = () => {
    dispatch(closeCart())
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      if (currentValue.preco) {
        return (acc += currentValue.preco)
      }
      return 0
    }, 0)
  }

  const toRemoveItem = (id: number) => {
    dispatch(removeToCart(id))
  }

  const finishOrder = () => {
    toCloseCart()
    dispatch(clearCart())
    setDelivery(false)
    setPayment(false)
    setOrderPlaced(false)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={toCloseCart} />
        <S.Sidebar>
          {delivery ? (
            payment ? (
              orderPlaced ? (
                <S.Delivery>
                  <h3>Pedido realizado - {data?.orderId}</h3>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.{' '}
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <Button
                    onClick={finishOrder}
                    type="button"
                    title="Clique para fechar o carrinho e concluir o pedido"
                  >
                    Concluir
                  </Button>{' '}
                </S.Delivery>
              ) : (
                <S.Delivery>
                  <h3>Pagamento - Valor a pagar R$ 190,90</h3>
                  <label htmlFor="nameCard">Nome no Cartão</label>
                  <S.InputDelivery
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    type="text"
                    name="nameCard"
                    id="nameCard"
                    className={checkInputHasError('nameCard') ? 'error' : ''}
                  />
                  <S.InputsWithDisplayFlex>
                    <div>
                      <label htmlFor="cardNumber">Numero do cartão</label>
                      <S.InputNumber
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCode">CVV</label>
                      <S.InputCode
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        name="cardCode"
                        id="cardCode"
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </div>
                  </S.InputsWithDisplayFlex>
                  <S.InputsWithDisplayFlex>
                    <div>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        name="expiresMonth"
                        id="expiresMonth"
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        name="expiresYear"
                        id="expiresYear"
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                  </S.InputsWithDisplayFlex>{' '}
                  <br />
                  <Button
                    type="submit"
                    onClick={() => {
                      form.handleSubmit()
                      setOrderPlaced(true)
                    }}
                    title="Clique para finalizar o pagamento"
                  >
                    {isLoading
                      ? 'finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </Button>{' '}
                  <br />
                  <Button
                    type="button"
                    onClick={() => setPayment(false)}
                    title="Clique para voltar para a edição de endereço"
                  >
                    Voltar para voltar a edição de endereço
                  </Button>
                </S.Delivery>
              )
            ) : (
              <S.Delivery>
                <h3>Entrega</h3>
                <label htmlFor="fullName">Quem irá receber</label>
                <S.InputDelivery
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />
                <label htmlFor="adress">Endereço</label>
                <S.InputDelivery
                  value={form.values.adress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="adress"
                  id="adress"
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
                <label htmlFor="city">Cidade</label>
                <S.InputDelivery
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="city"
                  id="city"
                  className={checkInputHasError('city') ? 'error' : ''}
                />
                <S.InputsWithDisplayFlex>
                  <div>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </div>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      name="number"
                      id="number"
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </div>
                </S.InputsWithDisplayFlex>
                <label htmlFor="addContent">Complemento (opcional)</label>
                <S.InputDelivery
                  value={form.values.addContent}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  name="addContent"
                  id="addContent"
                />{' '}
                <br />
                <Button
                  type="button"
                  onClick={() => setPayment(true)}
                  title="Clique para continuar com o pagamento"
                >
                  Continuar com o pagamento
                </Button>{' '}
                <br />
                <Button
                  type="button"
                  onClick={() => setDelivery(false)}
                  title="Clique para voltar para o carrinho"
                >
                  Voltar para o carrinho
                </Button>
              </S.Delivery>
            )
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>

                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toRemoveItem(item.id)}
                    />
                  </S.CartItem>
                ))}
              </ul>
              <S.Prices>
                Valor total: <span>{parseToBrl(getTotalPrice())}</span>
              </S.Prices>
              <Button
                type="button"
                onClick={() => setDelivery(true)}
                title="Clique aqui para continuar a compra"
              >
                Continuar com a entrega
              </Button>
            </>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </form>
  )
}

export default Cart
