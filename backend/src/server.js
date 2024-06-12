import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
const port = 4000;

const supabaseUrl = "https://ocrwzxxhochqpdwirxwv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jcnd6eHhob2NocXBkd2lyeHd2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODIxNjUyNSwiZXhwIjoyMDMzNzkyNTI1fQ.14-hM_4aAhquUPrvQG0HvYTGfBl9AHPaQCnE8I8Q5f8";
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Get all partners
app.get("/", async (req, res) => {
  const { data, error } = await supabase.from("partners").select("*");
  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json(data);
  }
});

// Add a new partner
app.post("/", async (req, res) => {
  const { name, description, thumbnailUrl, active } = req.body;
  const { data, error } = await supabase
    .from("partners")
    .insert([{ name, description, thumbnailUrl, active }])
    .select("*");
  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(201).json(data[0]);
  }
});

// Delete a partner by ID
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("partners").delete().eq("id", id);
  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json({ message: "Partner deleted successfully" });
  }
});

app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
});
