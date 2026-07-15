import { createClient } from '@supabase/supabase-js'

const URL = 'https://zvxwlsqcwtplcxwszgai.supabase.co/rest/v1/Posts'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2eHdsc3Fjd3RwbGN4d3N6Z2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMjU3MTIsImV4cCI6MjA5OTcwMTcxMn0.-IncNevr0KJ2jqIcIphHANIv0r45TuomCdvgD0oAjuo'

export const supabase = createClient(URL, API_KEY);