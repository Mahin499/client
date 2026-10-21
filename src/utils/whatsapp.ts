export const APEX_WHATSAPP_NUMBER = '919037098706';
export const APEX_PHONE_DISPLAY = '+91 90370 98706';

export interface WhatsAppOrderDetails {
  productName: string;
  manufacturer?: string;
  range?: string;
  size?: string;
  dimensionsCm?: string;
  thickness?: string;
  code?: string;
  sku?: string;
  cover?: string;
  finish?: string;
  storage?: string;
  mrp?: number;
  originalPrice?: number;
  discountPercentage?: number;
  price?: number;
  savings?: number;
}

/**
 * Builds the official APEX WhatsApp order enquiry link for M.M. Foam and APEX products
 */
export const buildWhatsAppUrl = (details: WhatsAppOrderDetails): string => {
  const actualMrp = details.originalPrice || details.mrp || (details.price ? Math.round(details.price / 0.7) : 0);
  const actualPrice = details.price || Math.round(actualMrp * 0.7);
  const discount = details.discountPercentage || 30;

  let message = `Hi APEX, I am interested in the ${details.productName}.`;

  const detailsList: string[] = [];
  if (details.range || details.manufacturer) {
    detailsList.push(`Product Range: ${details.range || details.manufacturer}`);
  }
  if (details.size) {
    detailsList.push(`Selected size: ${details.size}${details.dimensionsCm ? ` (${details.dimensionsCm})` : ''}`);
  }
  if (details.thickness && details.thickness !== 'Standard' && details.thickness !== 'Fitted / Standard') {
    detailsList.push(`Thickness: ${details.thickness}`);
  }
  if (details.code) {
    detailsList.push(`Product code: ${details.code}`);
  }
  if (details.cover) {
    detailsList.push(`Cover option: ${details.cover}`);
  }
  if (actualMrp > 0) {
    detailsList.push(`MRP: ₹${actualMrp.toLocaleString('en-IN')}`);
    detailsList.push(`Discount: ${discount}%`);
    detailsList.push(`Selling price: ₹${actualPrice.toLocaleString('en-IN')}`);
  }

  if (detailsList.length > 0) {
    message += ` ${detailsList.join('. ')}.`;
  }

  message += ` Please confirm availability and delivery details. I would like to know more and place an order.`;

  return `https://wa.me/${APEX_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Builds a general enquiry WhatsApp link
 */
export const buildGeneralWhatsAppUrl = (topic: string = 'General Inquiry'): string => {
  const message = `Hi APEX, I am contacting you regarding ${topic}. I would like to know more about your verified M.M. Foam organic natural latex mattresses, pillows, and architectural sleep systems.`;
  return `https://wa.me/${APEX_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
