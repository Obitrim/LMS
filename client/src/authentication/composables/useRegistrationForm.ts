import useVuelidate from '@vuelidate/core';
import { minLength, required, email, sameAs } from '@vuelidate/validators';
import { nanoid } from 'nanoid';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const useRegistrationForm = () => {
  const router = useRouter();

  const registrationForm = ref({
    organizationName: '',
    email: '',
    password: '',
    confirmPass: ''
  });

  const formRules = computed(() => ({
    organizationName: {
      minLength: minLength(3),
      required
    },
    email: {
      email,
      required
    },
    password: {
      required
    },
    confirmPass: {
      required,
      sameAs: sameAs(registrationForm.value.password, 'new password')
    }
  }));

  const validationResult = useVuelidate(formRules, registrationForm);

  const hasValidData = computed(() => !validationResult.value.$invalid);

  function submit() {
    if (!hasValidData.value) return;

    localStorage.setItem(
      'user',
      JSON.stringify({
        id: nanoid(),
        ...registrationForm.value
      })
    );

    router.push({ name: 'dashboard-home' });
  }

  return {
    data: registrationForm,
    validationResult,
    submit,
    hasValidData
  };
};

export default useRegistrationForm;
