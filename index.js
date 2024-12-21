import * as cheerio from 'cheerio';
import _ from 'lodash';

function compile(html, data) {
    const $ = cheerio.load(html);

    $('[x-for]').each(function () {
        const key = $(this).attr('x-for').split(' in ')[1].slice(5); // Remove 'data.' from the start
        const items = _.get(data, key);
        const template = $(this).html();

        let result = '';
        items.forEach((item) => {
            let itemHtml = cheerio.load(template);
            for (const prop in item) {
                const regex = new RegExp(`item.${prop}`, 'g');
                itemHtml('[x-html]').each(function () {
                    if ($(this).attr('x-html') === `item.${prop}`) {
                        $(this).html(item[prop]);
                    }
                });
                itemHtml('[x-text]').each(function () {
                    if ($(this).attr('x-text') === `item.${prop}`) {
                        $(this).text(item[prop]);
                    }
                });
                itemHtml('[:src]').each(function () {
                    if ($(this).attr(':src') === `item.${prop}`) {
                        $(this).attr('src', item[prop]);
                    }
                });
                itemHtml('[:id]').each(function () {
                    if ($(this).attr(':id') === `item.${prop}`) {
                        $(this).attr('id', item[prop]);
                    }
                });
            }
            result += itemHtml.html();
        });

        $(this).replaceWith(result);
    });

    $('[x-html]').each(function () {
        const key = $(this).attr('x-html').slice(5); // Remove 'data.' from the start
        const value = _.get(data, key);
        if (value) {
            $(this).html(value);
        }
    });

    $('[x-text]').each(function () {
        const key = $(this).attr('x-text').slice(5); // Remove 'data.' from the start
        const value = _.get(data, key);
        if (value) {
            $(this).text(value);
        }
    });

    $('[:src]').each(function () {
        const key = $(this).attr(':src').slice(5); // Remove 'data.' from the start
        const value = _.get(data, key);
        if (value) {
            $(this).attr('src', value);
        }
    });

    $('[:id]').each(function () {
        const key = $(this).attr(':id').slice(5); // Remove 'data.' from the start
        const value = _.get(data, key);
        if (value) {
            $(this).attr('id', value);
        }
    });

    /*
    $('[x-if]').each(function() {
      const condition = $(this).attr('x-if').slice(5); // Remove 'data.' from the start
      const value = _.get(data, condition);
      if (!value) {
        $(this).remove();
      }
    });
    */

    return $.html();
}

export { compile };
