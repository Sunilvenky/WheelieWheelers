import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

exports.handler = async (event) => {
  try {
    const { httpMethod, body, queryStringParameters } = event;

    if (httpMethod === 'GET') {
      const { id } = queryStringParameters || {};
      let query = supabase.from('trips');

      if (id) {
        query = query.eq('id', id);
      }

      const { data, error } = await query.select('*');

      if (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: error.message }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({ trips: data }),
      };
    }

    if (httpMethod === 'POST') {
      const tripData = JSON.parse(body);
      const { data, error } = await supabase.from('trips').insert([tripData]).select();

      if (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: error.message }),
        };
      }

      return {
        statusCode: 201,
        body: JSON.stringify({ trip: data[0] }),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
