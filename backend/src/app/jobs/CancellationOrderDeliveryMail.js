import Mail from '../../lib/Mail';

class CancellationOrderDeliveryMail {
  get key() {
    return 'CancellationOrderDeliveryMail';
  }

  async handle({ data }) {
    const { deliveryMan, recipient, order } = data;

    await Mail.sendMail({
      to: `${deliveryMan.name} <${deliveryMan.email}>`,
      subject: 'FastFeet - Cancelamento de encomenda',
      template: 'cancellation-delivery',
      context: {
        deliveryMan: deliveryMan.name,
        recipientName: recipient.name,
        recipientAddress: `${recipient.street}, ${recipient.number} - ${recipient.city}`,
        recipientZip: recipient.zip,
        recipientComplement: recipient.complement,
        product: order.product,
      },
    });
  }
}

export default new CancellationOrderDeliveryMail();
