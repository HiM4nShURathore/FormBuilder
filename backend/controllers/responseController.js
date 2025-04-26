import Response from '../models/Response.js';

export const submitResponse = async (req, res) => {
  try {
    const { formId, ...answers } = req.body;

    const response = new Response({
      formId,
      answers,
    });

    await response.save();
    res.status(201).json({ message: 'Response submitted successfully' });
  } catch (err) {
    console.error("Submit response error:", err);
    res.status(500).json({ message: 'Failed to submit response' });
  }
};
