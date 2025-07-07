import asyncHandler from 'express-async-handler';
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Invoice from '../models/invoiceModel.js';
import Sequence from '../models/sequenceModel.js';

const addInvoice = asyncHandler(async (req, res) => {
  const {
    invoiceType,
    dateIssue,
    subTotal,
    taxes,
    customer,
    paymentSell,
    provider,
    paymentBuy,
    idUsuario
  } = req.body;

  try {
    let invoiceID;
    if (invoiceType === "Purchase" || invoiceType === "Sales") {
      const sequenceId = invoiceType === "Purchase" ? "sequencePurchaseId" : "sequenceSaleId";
      const sequence = await Sequence.findByPk(sequenceId);
      if (!sequence) {
        res.status(404).json({ message: 'Secuencia no encontrada' });
        return;
      }
      sequence.sequence_value += 1;
      await sequence.save();
      invoiceID = sequence.sequence_value;
    } else {
      res.status(400).json({ message: 'Tipo de factura no válido' });
      return;
    }

    const newInvoice = await Invoice.create({
      invoiceID: invoiceID,
      invoiceType: invoiceType,
      idUsuario: idUsuario,
      dateIssue: dateIssue,
      subTotal: subTotal,
      taxes: taxes,
      customer: customer,
      paymentSell: paymentSell,
      provider: provider,
      paymentBuy: paymentBuy,
    });

    if (newInvoice) {
      res.status(201).json({ message: 'Factura agregada con éxito', data: newInvoice });
    } else {
      res.status(400).json({ message: 'No se pudo agregar la factura' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la factura', error: error.message });
  }
});

const updateInvoice = asyncHandler(async (req, res) => {
  const {
    dateIssue,
    subTotal,
    taxes,
    customer,
    paymentSell,
    provider,
    paymentBuy
  } = req.body;

  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      res.status(404);
      throw new Error('Factura no encontrada');
    }
    invoice.dateIssue = dateIssue;
    invoice.subTotal = subTotal;
    invoice.taxes = taxes;
    invoice.customer = customer;
    invoice.paymentSell = paymentSell;
    invoice.provider = provider;
    invoice.paymentBuy = paymentBuy;
    const updatedInvoice = await invoice.save();
    res.json({ message: 'Invoice actualizado con éxito', data: updatedInvoice });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar Invoice', error: error.message });
  }
});

const deleteInvoice = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    await Invoice.destroy({ where: { id: id } });
    res.json({ message: 'Factura eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la factura', error: error.message });
  }
});

const getInvoice = asyncHandler(async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      res.status(404);
      throw new Error('Factura no encontrada');
    }
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la factura', error: error.message });
  }
});

const getInvoicesByUserId = asyncHandler(async (req, res) => {
  const idUsuario = req.params.idUsuario;
  try {
    const invoices = await Invoice.findAll({ where: { idUsuario: idUsuario } });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las facturas', error: error.message });
  }
});

const generateId = async (req, res) => {
  const { invoiceType } = req.params;
  try {
    let sequenceId;
    if (invoiceType === "Purchase") {
      sequenceId = "sequencePurchaseId";
    } else if (invoiceType === "Sales") {
      sequenceId = "sequenceSaleId";
    } else {
      res.status(400);
      throw new Error('Tipo de factura no válido');
    }
    const sequence = await Sequence.findByPk(sequenceId);
    if (!sequence) {
      res.status(404);
      throw new Error('Secuencia no encontrada');
    }
    await sequence.save();
    res.json({ sequence_value: sequence.sequence_value });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la secuencia', error: error.message });
  }
};

export {
  addInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
  getInvoicesByUserId,
  generateId
};