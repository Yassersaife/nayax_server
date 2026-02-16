const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:8000",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.post("/spicy", async (req, res) => {
  const status = req.query.status || "success";

  // simulate delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (status === "success") {
    return res.json({
      jsonrpc: "2.0",
      id: 1765221685537,
      result: {
        statusCode: 0,
        statusMessage: "העסקה אושרה",
        appVersion: "01.06.52",
        retailerId: 1722694010,
        ecrNo: 1,
        vuid: 25120821212406,
        tranCode: 1,
        currency: 376,
        amount: 100,
        mutag: 2,
        mutagName: "Visa",
        manipk: 0,
        solek: 1,
        cardNumber: "481680***0216",
        cardNumberOriginalLength: "481680******0216",
        expDate: 2912,
        cardName: "VISA CREDIT",
        tokenizedCardNumber: "f90cbe70f254dcb3cb342058b4800f7a",
        tranType: 1,
        posEntryMode: 7,
        isClub: false,
        isPrepaid: false,
        creditTerms: 1,
        uid: "25120821213417226942805",
        rrn: "534221970064",
        authCodeManpik: 1,
        issuerAuthNum: "063868",
        acquirerMerchantID: 8630840,
        sysTraceNumber: 98001019,
        authorizationCommStat: {
          connectRetries: 0,
          connectTotalTime: 121,
          authorizationTotalTime: 1075,
          smallBlockedTotalTime: 0
        },
        isPreAuthAllowed: true,
        merchantReceipt: [
          { fieldName: "שם מסוף", fieldValue: "נוטלה בית חנינ" },
          { fieldName: "תאריך", fieldValue: "08/12/25 21:21" },
          { fieldName: "מספר מסוף", fieldValue: "1722694" },
          { fieldName: "גרסת תוכנה", fieldValue: "MOD-01.10.54_SPI-01.2409.02" },
          { fieldName: "מספר עסק", fieldValue: "8630840" },
          { fieldName: "כרטיס", fieldValue: "VISA CREDIT" },
          { fieldName: "מספר", fieldValue: "4816801121500216" },
          { fieldName: "מספר שובר", fieldValue: "98001019" },
          { fieldName: "UID", fieldValue: "25120821213417226942805" },
          { fieldName: "RRN", fieldValue: "534221970064" },
          { fieldName: "סידורי ש", fieldValue: "0C" },
          { fieldName: "סידורי כ", fieldValue: "000" },
          { fieldName: "TSI", fieldValue: "E800" },
          { fieldName: "ARC", fieldValue: "00" },
          { fieldName: "TVR", fieldValue: "0000000000" },
          { fieldName: "סוג עסקה", fieldValue: "חובה" },
          { fieldName: "אישור מנפיק", fieldValue: "063868" },
          { fieldName: "גורם מאשר", fieldValue: "חברה" },
          { fieldName: "אופן ביצוע", fieldValue: "Contactless EMV" },
          { fieldName: "זיהוי יישום בשבב", fieldValue: "A0000000031010" },
          { fieldName: "סוג אשראי", fieldValue: "רגיל" },
          { fieldName: "סכום עסקה", fieldValue: "1.00 NIS" },
          { fieldName: "Verified by device", fieldValue: "" },
          { fieldName: "חתימת הלקוח", fieldValue: "" },
          { fieldName: "טלפון הלקוח", fieldValue: "" }
        ],
        customerReceipt: [
          { fieldName: "POS Name", fieldValue: "נוטלה בית חנינ" },
          { fieldName: "Tran Date", fieldValue: "08/12/25 21:21" },
          { fieldName: "POS Number", fieldValue: "1722694" },
          { fieldName: "SW Ver.", fieldValue: "MOD-01.10.54_SPI-01.2409.02" },
          { fieldName: "Merchant ID", fieldValue: "8630840" },
          { fieldName: "Card Name", fieldValue: "VISA CREDIT" },
          { fieldName: "Card Number", fieldValue: "0216" },
          { fieldName: "POS Tran ID", fieldValue: "98001019" },
          { fieldName: "UID", fieldValue: "25120821213417226942805" },
          { fieldName: "RRN", fieldValue: "534221970064" },
          { fieldName: "ATC", fieldValue: "0C" },
          { fieldName: "PAN SEQ", fieldValue: "000" },
          { fieldName: "Tran Type", fieldValue: "Debit" },
          { fieldName: "Issuer Auth Num", fieldValue: "063868" },
          { fieldName: "Authorized By", fieldValue: "Issuer" },
          { fieldName: "Entry Mode", fieldValue: "Contactless EMV" },
          { fieldName: "AID", fieldValue: "A0000000031010" },
          { fieldName: "Credit Terms", fieldValue: "Regular" },
          { fieldName: "Amount", fieldValue: "1.00 NIS" },
          { fieldName: "Verified by device", fieldValue: "" }
        ]
      }
    });
  }

  if (status === "declined") {
    return res.json({
      jsonrpc: "2.0",
      id: 1765221505733,
      result: {
        statusCode: 4,
        statusMessage: "עסקה לא אושרה",
        appVersion: "01.06.52",
        retailerId: 1722694010,
        ecrNo: 1,
        vuid: 251208211824095,
        tranCode: 1,
        currency: 376,
        amount: 100,
        mutag: 1,
        mutagName: "Mastercard",
        manipk: 1,
        solek: 1,
        cardNumber: "532615***2486",
        cardNumberOriginalLength: "532615******2486",
        expDate: 2811,
        cardName: "DEBIT MASTERCARD",
        tokenizedCardNumber: "426dd57b94882d547996b9a5f0641254",
        tranType: 1,
        posEntryMode: 7,
        isClub: false,
        isPrepaid: false,
        creditTerms: 1,
        uid: "25120821183717226942807",
        authCodeManpik: 2,
        acquirerMerchantID: 8630840,
        authorizationCommStat: {
          connectRetries: 0,
          connectTotalTime: 172,
          authorizationTotalTime: 106,
          smallBlockedTotalTime: 0
        },
        isPreAuthAllowed: true
      }
    });
  }

  // error
  return res.json({
    jsonrpc: "2.0",
    id: 1765221505733,
    result: {
      statusCode: -1,
      statusMessage: "no tran error"
    }
  });
});

//node server.js

app.listen(4000, () => {
  console.log("🔥 Spicy Mock running on http://localhost:4000");
  console.log("http://localhost:4000/spicy?status=success");
  console.log("http://localhost:4000/spicy?status=declined");
  console.log("http://localhost:4000/spicy?status=error");
});
