'use strict';

const sortList = (list) => {
  const salaryToInt = (listItem) => parseInt(
    listItem.getAttribute('data-salary').replace(/[$,]/g, ''));

  return [...list]
    .sort((a, b) => b.innerText.localeCompare(a.innerText))
    .sort((a, b) => salaryToInt(a) - salaryToInt(b));
};

const getEmployees = (list) =>
  [...list].reduce((persons, item) => {
    persons.push({
      name: item.innerText,
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    });

    return persons;
  }, []);

const ulTag = document.getElementsByTagName('ul').item(0);

sortList(document.querySelectorAll('[data-salary]')).forEach((employee) => {
  ulTag.prepend(employee);
});

getEmployees(document.querySelectorAll('[data-salary]'));
