from django.forms import modelform_factory
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic as views
from exam_app.car.models import Car
from exam_app.user_profile.models import Profile

class MakeFieldsReadOnlyMixin:
    def get_form(self, form_class=None):
        form = super().get_form(form_class=form_class)

        for field in form.fields:
            form.fields[field].widget.attrs['readonly'] = 'readonly'


        return form
class  ContextDataMixin:
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        profile = get_profile()
        context['profile'] = profile
        return context
def get_profile():
    profile = Profile.objects.first()
    return profile


# Create your views here.
def catalogue_view(request):
    cars = Car.objects.all()

    context = {
        'cars': cars,
        'profile': get_profile()
    }
    return render(request, 'car/catalogue.html', context)


class CreateCarView(ContextDataMixin,views.CreateView,):
    template_name = 'car/car-create.html'
    queryset = Car.objects.all()
    fields = ('type', 'model', 'year', 'image_url', 'price')
    success_url = reverse_lazy('catalogue')


    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.owner = get_profile()
        return super().form_valid(form)

    def get_form(self, form_class=None):
        form = super().get_form(form_class)
        form.fields['image_url'].widget.attrs['placeholder'] = 'https://...'
        return form


class DetailCarView( ContextDataMixin,views.DetailView,):
    template_name = 'car/car-details.html'
    queryset = Car.objects.all()
    context_object_name = 'car'


class EditCarView(ContextDataMixin,views.UpdateView,):
    template_name = 'car/car-edit.html'
    queryset = Car.objects.all()
    fields = ('type', 'model', 'year', 'image_url', 'price')
    success_url = reverse_lazy('catalogue')


class DeleteCarView(ContextDataMixin,MakeFieldsReadOnlyMixin,views.DeleteView,):
    template_name = 'car/car-delete.html'
    queryset = Car.objects.all()
    form_class = modelform_factory(Car, fields=('type', 'model', 'year', 'image_url', 'price'))
    success_url = reverse_lazy('catalogue')

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['instance'] = self.get_object()
        return kwargs
