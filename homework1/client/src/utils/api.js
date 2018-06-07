/* eslint-disable */
import axios from 'axios';

/**
 * Handles promise errors by loggin them to console
 *
 * @param {Object} error
 */
const handlePromiseError = error => console.log(`Error: ${error}`);

/**
 * Handles api response
 *
 * @param {object} response - api resonse object
 * @param {Number} successCode - successful api response code
 * @param {String} errorMessage
 */
const processApiResponse = ({ response, successCode, errorMessage }) => ({
  data: response.data,
  error: response.status === successCode ? null : errorMessage,
});

/**
 * Fetches all heroes from an api
 *
 * @returns {Promise} - Promise object represents operation result
 */
export const fetchData = (url) =>
  axios
    .get(url)
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while fetching',
      }),
    )
    .catch(handlePromiseError);

/**
 * Adds new hero
 *
 * @param {Object} hero - new hero
 * @returns {Promise} - Promise object represents operation result
 */
export const addData = (data, url) =>
  axios
    .post(url, data)
    .then(response =>
      processApiResponse({
        response,
        successCode: 201,
        errorMessage: 'Error while adding',
      }),
    )
    .catch(handlePromiseError);

/**
 * Removes a hero by id
 *
 * @param {Number} id - hero id
 * @returns {Promise} - Promise object represents operation result
 */
export const deleteData = (id, url) =>
  axios
    .delete(`${url}${id}`)
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while deleting',
      }),
    )
    .catch(handlePromiseError);

