from django.contrib import admin
from .models import StaffModel,StaffWorkModel,CustomerModel,CustomerWorkModel,WorkPlaceModel,CompanyCarModel


admin.site.register(StaffModel)
admin.site.register(StaffWorkModel)
admin.site.register(CustomerModel)
admin.site.register(CustomerWorkModel)
admin.site.register(WorkPlaceModel)
admin.site.register(CompanyCarModel)
