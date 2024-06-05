/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.addAdminRole = onCall(async (data, context) => {
  // get user and add custom claim (admin)
  try {
    const user = await admin.auth().getUserByEmail(data.email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    return {
      message: `Success ${data.email} has been made an admin`,
    };
  } catch (err) {
    logger.error(err);
    return {
      error: err.message,
    };
  }
});
