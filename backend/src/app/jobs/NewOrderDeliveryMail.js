import Mail from '../../lib/Mail';

class NewOrderDeliveryMail {
  get key() {
    return 'NewOrderDeliveryMail';
  }

  async handle({ data }) {
    const { deliveryMan, recipient, order } = data;

    await Mail.sendMail({
      to: `${deliveryMan.name} <${deliveryMan.email}>`,
      subject: 'FastFeet - Nova encomenda',
      template: 'new-delivery',
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

export default new NewOrderDeliveryMail();
