document.addEventListener('DOMContentLoaded', () => {
    const crudForm = document.getElementById('crudForm');
    const userTableBody = document.getElementById('userTableBody');
  
    crudForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(crudForm);
      const name = formData.get('name');
      const age = formData.get('age');
  
      const response = await fetch('/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${name}&age=${age}`,
      });
  
      if (response.ok) {
        window.location.reload();
      }
    });
  
    userTableBody.addEventListener('click', async (event) => {
      if (event.target.classList.contains('delete-button')) {
        const userId = event.target.dataset.userId;
        const response = await fetch(`/deleteUser/${userId}`, {
          method: 'GET',
        });
  
        if (response.ok) {
          window.location.reload();
        }
      }
    });
  });
  