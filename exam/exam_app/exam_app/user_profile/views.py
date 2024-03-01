from django.db.models import Sum
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic as views

from exam_app.car.models import Car
from exam_app.user_profile.models import Profile
from django.contrib.auth.forms import AuthenticationForm


# Create your views here.
def get_profile():
    profile = Profile.objects.first()
    return profile
def index(request):
    profile = get_profile()
    context = {
        'profile': profile
    }
    return render(request, 'profile/index.html', context)

class CreateProfileView(views.CreateView):
    queryset = Profile.objects.all()
    fields = ('username', 'email', 'age', 'password')
    template_name = 'profile/profile-create.html'
    success_url = reverse_lazy('catalogue')

class DetailProfileView(views.DetailView):
    template_name = 'profile/profile-details.html'



    def get_object(self, queryset=None):
        profile = get_profile()
        return profile

class EditProfileView(views.UpdateView):
    template_name = 'profile/profile-edit.html'
    queryset = Profile.objects.all()
    fields = ('username', 'email', 'age', 'password', 'first_name', 'last_name', 'profile_picture')
    success_url = reverse_lazy('profile-details')


    def get_object(self, queryset=None):
        profile = get_profile()
        return profile


class DeleteProfileView(views.DeleteView):
    template_name = 'profile/profile-delete.html'
    queryset = Profile.objects.all()
    success_url = reverse_lazy('index')



    def get_object(self, queryset=None):
        profile = get_profile()
        return profile