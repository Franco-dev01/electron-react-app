import React from "react";
import { Route, Routes } from "react-router-dom";
import QuoteDetails from "../vente/quote/quoteDetails";
import QuoteList from "../vente/quote/quoteList";
import QuoteCreation from "../vente/quote/quoteCreation";

export function QuoteRoutes() {
  return (
    <Routes>
      <Route path="details/:id" element={<QuoteDetails />} />
      <Route path="list" element={<QuoteList />} />
      <Route path="creation" element={<QuoteCreation />} />
    </Routes>
  );
}
