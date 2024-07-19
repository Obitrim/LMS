<script setup lang="ts">
import useRegistrationForm from '@/composables/useRegistrationForm'

const registrationForm = useRegistrationForm()
</script>

<template>
  <title>Register | LMS</title>

  <div class="w-full">
    <header>
      <h1 :class="['text-3xl']">Register</h1>
      <p :class="['mt-2 mb-5']">Create an account to use a seamless Leave Management system</p>
    </header>
    <form @submit.prevent="registrationForm.submit">
      <!-- Organization name -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="organization">
          Organization name
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="organization"
          type="text"
          placeholder="organization"
          v-model="registrationForm.validationResult.value.organizationName.$model"
        />
        <p
          v-show="registrationForm.validationResult.value.organizationName.$error"
          class="text-red-500 text-xs mt-2"
        >
          {{ registrationForm.validationResult.value.organizationName.$errors[0]?.$message }}
        </p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="email"
          type="email"
          placeholder="email"
          v-model="registrationForm.validationResult.value.email.$model"
        />
        <p
          class="text-red-500 text-xs mt-2"
          v-show="registrationForm.validationResult.value.email.$errors.length > 0"
        >
          {{ registrationForm.validationResult.value.email.$errors[0]?.$message }}
        </p>
      </div>

      <!-- Password -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >New password
        </label>
        <input
          :class="[
            'appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none',
            registrationForm.validationResult.value.password.$error && 'border-red-500'
          ]"
          id="password"
          type="password"
          placeholder="*******"
          v-model="registrationForm.validationResult.value.password.$model"
        />
        <p
          class="text-red-500 text-xs mt-2"
          v-show="registrationForm.validationResult.value.password.$error"
        >
          Please choose a password.
        </p>
      </div>

      <!-- New password confirmation -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Confirm password
        </label>
        <input
          :class="[
            'appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none',
            registrationForm.validationResult.value.confirmPass.$error && 'border-red-500'
          ]"
          id="confirmPass"
          type="password"
          placeholder="*******"
          v-model="registrationForm.validationResult.value.confirmPass.$model"
        />
        <p
          class="text-red-500 text-xs mt-2"
          v-show="registrationForm.validationResult.value.confirmPass.$error"
        >
          {{ registrationForm.validationResult.value.confirmPass.$errors[0]?.$message }}
        </p>
      </div>

      <button
        :disabled="!registrationForm.hasValidData.value"
        :class="[
          'bg-charcoal hover:bg-charcoal/90 transition-all duration-150',
          'text-white font-bold py-2 px-4 rounded focus:outline-none',
          'disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white'
        ]"
        type="submit"
      >
        Create account
      </button>
    </form>
  </div>
</template>
