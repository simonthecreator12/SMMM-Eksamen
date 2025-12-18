import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://wuymejpuvsgyzprfluan.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1eW1lanB1dnNneXpwcmZsdWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNjg0ODksImV4cCI6MjA4MTY0NDQ4OX0.T0rIx7U34AJOIU7hiRan_eHes2ZsBfhkjpTTgRXBw8k';
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("fond_detail.js loaded")



async function loadFondData() {
  try {
    // Get the ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const fondId = urlParams.get('id');

    if (!fondId) {
      console.error('No ID parameter found in URL');
      return;
    }

    // Fetch the specific fond item by ID
    const { data, error } = await supabase
      .from('fond')
      .select('*')
      .eq('id', fondId)
      .single();

    console.log('Supabase data:', data, 'Error:', error);

    if (error || !data) {
      console.error('Error fetching data:', error);
      return;
    }

    const titleEl = document.querySelector('.fond-title');
    const descEl = document.querySelector('.fond-description');
    const imageEl = document.querySelector('.fond-image');

    if (titleEl) {
      titleEl.textContent = data.titel || 'Titel ikke tilgængelig';
    }

    if (descEl) {
      descEl.textContent = data.beskrivelse || 'Beskrivelse ikke tilgængelig';
    }

    if (imageEl && data.image) {
      imageEl.src = data.image;
      imageEl.alt = data.titel || 'Fond billede';
    }

  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

loadFondData();