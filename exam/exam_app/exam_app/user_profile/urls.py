from django.urls import path
from exam_app.user_profile import views as view

urlpatterns = (
    path('', view.index, name='index'),
    path('create/', view.CreateProfileView.as_view(), name='create-profile'),
    path('details/', view.DetailProfileView.as_view(), name='profile-details'),
    path('edit/', view.EditProfileView.as_view(), name='edit-profile'),
    path('delete/', view.DeleteProfileView.as_view(), name='delete-profile'),

)
